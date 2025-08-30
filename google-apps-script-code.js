/**
 * Google Apps Script code to handle form submissions from the website
 * 
 * Instructions:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this code
 * 4. Save the project with a name like "Contact Form Handler"
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Select type: "Web app"
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the web app URL and add it to your .env file
 */

// This function processes the incoming POST request
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Business Type',
        'Project Type',
        'Message',
        'Consultation Requested'
      ]);
    }
    
    // Append the form data to the sheet
    sheet.appendRow([
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone,
      data.businessType,
      data.projectType,
      data.message,
      data.consultation ? 'Yes' : 'No'
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Form data successfully recorded'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// This function handles GET requests (optional, for testing)
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    result: 'success',
    message: 'The web app is running correctly. Use POST to submit data.'
  })).setMimeType(ContentService.MimeType.JSON);
}