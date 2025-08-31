# Troubleshooting Guide for Google Sheets Integration

This guide will help you resolve common issues with the Google Sheets form submission functionality.

## Error: 500 Internal Server Error

If you're seeing a 500 Internal Server Error when submitting the form, follow these steps:

### 1. Check Environment Variables

Ensure your `.env` and `.env.development` files contain the correct Google Sheets API URL:

```
VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Make sure to replace `YOUR_SCRIPT_ID` with your actual Google Apps Script deployment ID.

### 2. Verify Google Apps Script Deployment

- Open your Google Apps Script project
- Click on "Deploy" > "Manage deployments"
- Ensure your deployment is active and note the Web app URL
- Verify this URL matches what's in your `.env` file

### 3. Test Direct API Access

Use the included test file to check if your Google Apps Script is working correctly:

1. Open `test-google-sheets-api.html` in your browser
2. Verify the API URL is correct
3. Submit the test form and check the response

### 4. Alternative Testing with Express Server

You can use the included Express server for testing:

1. Install required dependencies:
   ```
   npm install express cors http-proxy-middleware dotenv
   ```

2. Run the server:
   ```
   npm run server
   ```

3. Open http://localhost:3000 in your browser to test

## CORS Issues

If you're experiencing CORS-related errors:

### 1. Verify Google Apps Script CORS Headers

Ensure your Google Apps Script includes the necessary CORS headers:

```javascript
function doOptions() {
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// Also ensure these headers are in your doPost and doGet functions
```

### 2. Check Vite Proxy Configuration

Verify your `vite.config.ts` has the correct proxy configuration:

```typescript
server: {
  proxy: {
    '/api/sheets': {
      target: 'https://script.google.com',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => {
        // Ensure this correctly extracts your script ID
        const scriptId = 'YOUR_SCRIPT_ID'; // Hardcoded fallback
        return `/macros/s/${scriptId}/exec`;
      },
    },
  },
},
```

## Debugging Tips

### 1. Check Browser Console

Open your browser's developer tools (F12) and look for errors in the Console tab.

### 2. Enable Verbose Logging

The application has been configured with detailed logging. Check your browser console for:

- Request details being sent
- Response status codes
- Response headers and body

### 3. Network Tab Analysis

In your browser's developer tools, go to the Network tab and:

1. Filter for "sheets" or "fetch" requests
2. Examine the request headers, payload, and response
3. Look for any CORS preflight (OPTIONS) requests and their responses

## Contact Form Submission Flow

Understanding the submission flow can help with troubleshooting:

1. User submits the form in `Contact.tsx`
2. `submitToGoogleSheets()` in `google-sheets-api.ts` is called
3. The function first tries a direct submission to the Google Sheets API
4. If that fails, it falls back to using the `/api/sheets` proxy endpoint
5. In development, Vite's proxy handles the request
6. In production, the Vercel Edge Function handles the request

## Still Having Issues?

If you're still experiencing problems after trying these steps:

1. Try using the Express server approach for testing
2. Check if your Google Apps Script has any execution quotas or limitations
3. Verify your Google Sheets permissions and sharing settings

---

For additional help, please contact the development team.