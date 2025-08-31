// Google Sheets API integration utility

/**
 * Submits form data to Google Sheets via the Apps Script Web App URL
 * @param formData - The form data to submit
 * @returns Promise with the response containing success status and message
 */
type SheetResponse = { success: boolean; message?: string };

export const submitToGoogleSheets = async (formData: Record<string, string>): Promise<SheetResponse> => {
  try {
    const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_API_URL;
    
    if (!googleSheetsUrl) {
      throw new Error('Google Sheets API URL is not configured');
    }

    // Try direct submission first (with CORS headers in Google Apps Script)
    // If that fails, we'll try the proxy approach
    console.log('Attempting direct submission to Google Sheets');
    console.log('Form data:', formData);

    try {
      const directResponse = await fetch(googleSheetsUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      
      console.log('Direct submission response status:', directResponse.status);
      
      // If direct submission works, process the response
      if (directResponse.ok) {
        const responseText = await directResponse.text();
        console.log('Direct submission response text:', responseText);
        
        try {
          const parsedResponse = JSON.parse(responseText) as SheetResponse;
          return parsedResponse;
        } catch (e) {
          return { message: responseText, success: true };
        }
      } else {
        console.log('Direct submission returned non-OK status:', directResponse.status);
        const errorText = await directResponse.text();
        console.log('Direct submission error text:', errorText);
        throw new Error(`Direct submission failed with status ${directResponse.status}: ${errorText}`);
      }
    } catch (directError: unknown) {
      console.log('Direct submission failed, trying proxy:', directError);
      const errorMessage = directError instanceof Error ? directError.message : String(directError);
      console.log('Direct submission error message:', errorMessage);
    }
    
    // Fallback to proxy approach
    console.log('Falling back to proxy submission');
    const proxyURL = '/api/sheets';
    
    try {
      console.log('Sending request to proxy:', proxyURL);
      console.log('Request body:', JSON.stringify(formData));
      
      const response = await fetch(proxyURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Proxy response status:', response.status);
      console.log('Proxy response headers:', Object.fromEntries([...response.headers.entries()]));
      
      // Try to get the response text even if it's not OK
      const responseText = await response.text();
      console.log('Proxy response text:', responseText);
      
      // Try to parse as JSON if possible
      let responseData: SheetResponse;
      try {
        responseData = JSON.parse(responseText) as SheetResponse;
        console.log('Parsed response data:', responseData);
      } catch (e) {
        // If not valid JSON, use the text as is
        console.log('Response is not valid JSON, using text as is');
        responseData = { message: responseText, success: false };
      }

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${responseData.message || responseText}`);
      }
      
      return responseData;
    } catch (proxyError: unknown) {
      console.error('Proxy submission error:', proxyError);
      const errorMessage = proxyError instanceof Error ? proxyError.message : String(proxyError);
      throw new Error(`Proxy submission failed: ${errorMessage}`);
    }
    
    // This line is unreachable but was causing a TypeScript error
    // return responseData; - removed as it's after a throw statement
  } catch (error: unknown) {
    console.error('Error submitting to Google Sheets:', error);
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(`Error submitting to Google Sheets: ${String(error)}`);
    }
  }
};