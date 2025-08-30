// Google Sheets API integration utility

/**
 * Submits form data to Google Sheets via the Apps Script Web App URL
 * @param formData - The form data to submit
 * @returns Promise with the response
 */
export const submitToGoogleSheets = async (formData: any) => {
  try {
    // The URL should be the deployed Google Apps Script web app URL provided by the user
    const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_API_URL || '';
    
    if (!scriptURL) {
      throw new Error('Google Sheets API URL is not configured');
    }

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
};