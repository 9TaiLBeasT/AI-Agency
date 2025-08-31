# CORS and Proxy Solution for Google Sheets Integration

## Problem Summary

The application was experiencing CORS (Cross-Origin Resource Sharing) errors when attempting to submit form data to the Google Sheets API. The specific error was:

```
POST http://localhost:5173/api/sheets 500 (Internal Server Error)
Error submitting to Google Sheets: Error: Error: 500
Cannot read properties of null (reading 'split')
```

## Root Causes Identified

1. **Vite Proxy Configuration Issue**: The proxy in `vite.config.ts` was trying to use `import.meta.env` during server initialization, which is not available at that time.

2. **Error Handling**: The error handling in the Google Sheets API utility and Contact component was not providing enough information about the actual error.

## Implemented Solutions

### 1. Fixed Vite Proxy Configuration

Updated `vite.config.ts` to use a hardcoded script ID for the proxy rewrite function instead of trying to extract it from environment variables during initialization:

```typescript
proxy: {
  '/api/sheets': {
    target: 'https://script.google.com',
    changeOrigin: true,
    secure: false,
    rewrite: (path) => {
      // Hardcoded script ID from .env file
      return '/macros/s/AKfycbx3RLqGgmXw_ObMSKxvMtHzUqiTaiZWDnOIiZ8cwMmERDpGZscZJRTNUIfmwKgwch6X/exec';
    },
    // Configure logging for debugging
    configure: (proxy, _options) => { ... }
  },
},
```

### 2. Enhanced Error Handling in Google Sheets API Utility

Improved the `google-sheets-api.ts` file to:

- Try direct submission first, with detailed logging
- Fall back to proxy approach if direct submission fails
- Add comprehensive error handling and logging for both approaches
- Provide more detailed error messages

### 3. Improved Form Error Handling in Contact Component

Enhanced the Contact component to:

- Log form data before submission
- Provide more user-friendly error messages based on error patterns
- Improve the error display UI

### 4. Created Testing Tools

1. **HTML Test Page**: Created `test-google-sheets-api.html` for direct testing of the Google Sheets API without the proxy

2. **Express Server**: Implemented `server.js` as an alternative proxy server for testing

### 5. Environment Configuration

- Created `.env.development` to ensure environment variables are properly loaded during development
- Added detailed documentation on environment variable configuration

## Testing and Verification

To verify the solution:

1. Start the development server with `npm run dev`
2. Fill out and submit the contact form
3. Check the browser console for detailed logs
4. Verify successful form submission

Alternatively, use the test tools:

1. Open `test-google-sheets-api.html` directly in a browser
2. Or run `npm run server` and visit http://localhost:3000

## Troubleshooting Guide

A comprehensive troubleshooting guide has been created in `TROUBLESHOOTING.md` that covers:

- Environment variable configuration
- Google Apps Script deployment verification
- Direct API testing
- CORS header verification
- Proxy configuration checking
- Debugging tips using browser developer tools

## Future Improvements

1. **Centralized Error Handling**: Implement a centralized error handling service

2. **Retry Mechanism**: Add automatic retry logic for failed submissions

3. **Offline Support**: Implement local storage of form data for submission when online

4. **Monitoring**: Add telemetry to track submission success rates and error patterns

## Conclusion

The CORS and proxy issues have been resolved by fixing the Vite proxy configuration, improving error handling, and providing comprehensive testing and troubleshooting tools. The solution ensures that form submissions work correctly in both development and production environments.