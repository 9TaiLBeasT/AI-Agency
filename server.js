// Simple Express server to proxy requests to Google Sheets API
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Get Google Sheets API URL from environment variable
const googleSheetsApiUrl = process.env.VITE_GOOGLE_SHEETS_API_URL;

if (!googleSheetsApiUrl) {
  console.error('Error: VITE_GOOGLE_SHEETS_API_URL environment variable is not set');
  process.exit(1);
}

// Extract script ID from the Google Sheets API URL
const scriptIdMatch = googleSheetsApiUrl.match(/\/macros\/s\/([^\/]+)/);
const scriptId = scriptIdMatch ? scriptIdMatch[1] : null;

if (!scriptId) {
  console.error('Error: Could not extract script ID from Google Sheets API URL');
  process.exit(1);
}

console.log('Using Google Sheets script ID:', scriptId);

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Create proxy middleware for /api/sheets endpoint
const sheetsProxy = createProxyMiddleware({
  target: 'https://script.google.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/sheets': `/macros/s/${scriptId}/exec`
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log('Proxying request to Google Sheets API');
    
    // If the request has a body, restream it to the proxy request
    if (req.body) {
      const bodyData = JSON.stringify(req.body);
      proxyReq.setHeader('Content-Type', 'application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      proxyReq.write(bodyData);
    }
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log('Received response from Google Sheets API:', proxyRes.statusCode);
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error', message: err.message });
  }
});

// Apply proxy middleware to /api/sheets endpoint
app.use('/api/sheets', sheetsProxy);

// Direct test endpoint
app.post('/test-direct', async (req, res) => {
  try {
    console.log('Testing direct request to Google Sheets API');
    console.log('Request body:', req.body);
    
    const response = await fetch(googleSheetsApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    
    console.log('Direct request status:', response.status);
    
    const responseText = await response.text();
    console.log('Direct request response:', responseText);
    
    // Forward the response status and body
    res.status(response.status);
    
    try {
      const responseData = JSON.parse(responseText);
      res.json(responseData);
    } catch (e) {
      res.send(responseText);
    }
  } catch (error) {
    console.error('Error in direct test:', error);
    res.status(500).json({ error: 'Direct test error', message: error.message });
  }
});

// Serve the test HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test-google-sheets-api.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test page available at http://localhost:${PORT}`);
  console.log(`Proxy endpoint: http://localhost:${PORT}/api/sheets`);
  console.log(`Direct test endpoint: http://localhost:${PORT}/test-direct`);
});