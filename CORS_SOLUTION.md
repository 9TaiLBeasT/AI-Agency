# Resolving CORS Issues with Google Sheets Integration

## Problem

When submitting data from your website to a Google Apps Script Web App, you may encounter CORS (Cross-Origin Resource Sharing) errors like:

```
Access to fetch at 'https://script.google.com/macros/s/...' from origin 'http://localhost:5173' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

## Solution

This repository implements a comprehensive solution to solve CORS issues in both development and production environments:

### 1. Updated Google Apps Script with CORS Headers

The `google-apps-script-code.js` file has been updated to include proper CORS headers in all responses. Key changes include:

- Added `Access-Control-Allow-Origin: *` header to allow requests from any origin
- Added `Access-Control-Allow-Methods: GET, POST, OPTIONS` header to specify allowed methods
- Added `Access-Control-Allow-Headers: Content-Type` header to allow the Content-Type header
- Added a `doOptions()` function to handle preflight requests

### 2. Development Server Proxy

For local development, we've configured a proxy in `vite.config.ts` that forwards requests to the Google Apps Script URL, avoiding CORS issues during development.

### 3. Vercel Edge Function for Production

For production deployment, we've created a Vercel Edge Function in `/api/sheets.js` that acts as a proxy between your website and the Google Apps Script. This serverless function:

- Handles CORS preflight requests
- Forwards POST requests to the Google Apps Script
- Returns responses with proper CORS headers
- Works seamlessly with the same API endpoint used in development

## Implementation Steps

1. **Update your Google Apps Script**:
   - Replace your existing Google Apps Script code with the updated version in `google-apps-script-code.js`
   - Re-deploy your script as a web app
   - Make sure to select "Anyone, even anonymous" for "Who has access"

2. **Configure your development environment**:
   - Ensure your `.env` file contains the correct `VITE_GOOGLE_SHEETS_API_URL` pointing to your deployed Google Apps Script web app URL
   - The Vite development server will automatically proxy requests to avoid CORS issues

3. **For production deployment on Vercel**:
   - The Edge Function in `/api/sheets.js` will automatically be deployed when you push to Vercel
   - Make sure to set the `VITE_GOOGLE_SHEETS_API_URL` environment variable in your Vercel project settings
   - No additional configuration is needed as the Edge Function handles all CORS issues

## Testing

To test if the CORS issue is resolved:

1. Start your development server with `npm run dev`
2. Fill out and submit the contact form
3. Check the browser console for any CORS errors
4. Verify that the data is being submitted to your Google Sheet

## Troubleshooting

If you still encounter CORS issues:

1. **Google Apps Script Deployment**:
   - Verify that your Google Apps Script has been properly deployed with the updated code
   - Make sure you've selected "Deploy as web app" and chosen "Anyone, even anonymous" for access
   - After updating the script, you must create a new deployment (not just save)
   - The new deployment will have a different URL - update your `.env` file accordingly

2. **Environment Configuration**:
   - Check that the `VITE_GOOGLE_SHEETS_API_URL` in your `.env` file is correct
   - For Vercel deployment, verify the environment variable is set in the Vercel dashboard

3. **Browser Issues**:
   - Try clearing your browser cache or using an incognito/private window
   - Check the browser console for specific error messages

4. **Vercel Edge Function**:
   - Verify that the `/api` directory is properly included in your deployment
   - Check Vercel logs for any errors related to the Edge Function

5. **Testing the API Directly**:
   - Use a tool like Postman to test the Google Apps Script directly
   - This can help determine if the issue is with your script or the proxy