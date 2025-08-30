# Google Sheets Integration for Contact Form

This document provides step-by-step instructions on how to connect your RivRang Digital Agency contact form with Google Sheets to receive client information.

## Overview

The integration uses Google Apps Script to create a web API that receives form submissions from your website and records them in a Google Sheet. This approach is:

- Free to use (no additional services required)
- Secure (using Google's authentication)
- Easy to set up and maintain

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet (e.g., "RivRang Contact Form Submissions")
3. The headers will be automatically created when the first submission is received

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any code in the editor and paste the code from the `google-apps-script-code.js` file in this project
3. Click the **Save** button (disk icon) and name your project (e.g., "Contact Form Handler")

### Step 3: Deploy the Web App

1. Click on **Deploy** > **New deployment**
2. Select **Web app** as the deployment type
3. Configure the deployment:
   - Description: "Contact Form Handler" (or any description you prefer)
   - Execute as: **Me** (your Google account)
   - Who has access: **Anyone** (this allows your website to send data without authentication)
4. Click **Deploy**
5. Authorize the app when prompted (you may need to click through security warnings since this is a self-developed app)
6. **Copy the Web App URL** that is displayed after deployment

### Step 4: Configure Your Website

1. In your project, create or edit the `.env` file in the root directory
2. Add your Web App URL as an environment variable:
   ```
   VITE_GOOGLE_SHEETS_API_URL=https://script.google.com/macros/s/your-script-id/exec
   ```
   (Replace the URL with the one you copied in Step 3)
3. Restart your development server for the changes to take effect

## How It Works

1. When a user submits the contact form on your website, the data is sent to your Google Apps Script web app
2. The script processes the data and adds it as a new row in your Google Sheet
3. The script returns a success or error response to your website
4. Your website shows a success message or error feedback to the user

## Troubleshooting

### Common Issues

- **CORS Errors**: If you see CORS-related errors in the console, make sure your Google Apps Script is deployed as a web app with access set to "Anyone"
- **Authorization Required**: You may need to re-authorize the app if you make changes to the script
- **Quota Limits**: Google Apps Script has usage quotas. For a contact form, you're unlikely to hit these limits, but be aware they exist for high-traffic sites

### Testing the Integration

1. Fill out the contact form on your website
2. Check your Google Sheet to see if the data was recorded
3. If there are issues, check the browser console for error messages

## Security Considerations

- The Google Apps Script web app URL is publicly accessible, but it only accepts data and doesn't expose sensitive information
- Consider implementing additional validation in the Apps Script to prevent spam or abuse
- Regularly check your Google Sheet for any suspicious submissions

## Maintenance

- If you make changes to the Google Apps Script code, you'll need to create a new deployment
- Each new deployment will generate a new URL, which you'll need to update in your `.env` file