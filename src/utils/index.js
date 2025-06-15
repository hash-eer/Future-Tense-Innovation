// // Google Apps Script code for handling form submissions
// // This code should be deployed as a Web App

// function doPost(e) {
//     try {
//       // Parse the incoming data
//       const data = JSON.parse(e.postData.contents);
      
//       // Open your Google Sheet (replace with your sheet ID)
//       const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
//       const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
      
//       // Add headers if this is the first row
//       if (sheet.getLastRow() === 0) {
//         sheet.getRange(1, 1, 1, 6).setValues([
//           ['Timestamp', 'Full Name', 'Email', 'Subject', 'Message', 'Date Submitted']
//         ]);
//       }
      
//       // Add the form data to the sheet
//       sheet.appendRow([
//         data.timestamp,
//         data.fullName,
//         data.email,
//         data.subject,
//         data.message,
//         data.date
//       ]);
      
//       // Optional: Send email notification
//       sendEmailNotification(data);
      
//       return ContentService
//         .createTextOutput(JSON.stringify({ status: 'success' }))
//         .setMimeType(ContentService.MimeType.JSON);
        
//     } catch (error) {
//       console.error('Error:', error);
//       return ContentService
//         .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
//         .setMimeType(ContentService.MimeType.JSON);
//     }
//   }
  
//   function sendEmailNotification(data) {
//     try {
//       // Replace with your email
//       const EMAIL_TO = 'your-email@domain.com';
      
//       const subject = `New Contact Form Submission: ${data.subject}`;
//       const body = `
//   New contact form submission received:
  
//   Name: ${data.fullName}
//   Email: ${data.email}
//   Subject: ${data.subject}
//   Message: ${data.message}
//   Submitted: ${data.timestamp}
//       `;
      
//       MailApp.sendEmail(EMAIL_TO, subject, body);
//     } catch (error) {
//       console.error('Email error:', error);
//     }
//   }
  
//   // Allow OPTIONS requests for CORS
//   function doOptions(e) {
//     return ContentService
//       .createTextOutput()
//       .setMimeType(ContentService.MimeType.TEXT)
//       .setHeaders({
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'POST, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type'
//       });
//   }

//........................................................



// 1. Go to Google Apps Script

// Open your browser and go to: https://script.google.com
// Sign in with your Google account

// 2. Create a New Project

// Click the "+ New project" button (usually in the top left)
// This will open a new Apps Script editor

// 3. Replace the Default Code

// You'll see a default function called myFunction()
// Delete all the existing code in the editor
// Copy and paste the entire Google Apps Script code I provided

// 4. Customize the Code
// Replace these placeholders with your actual values:
// javascript// Change this line:
// const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
// // To something like:
// const SHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';

// // Change this line:
// const EMAIL_TO = 'your-email@domain.com';
// // To your actual email:
// const EMAIL_TO = 'youremail@gmail.com';
// 5. Save the Project

// Click "Save" (or Ctrl/Cmd + S)
// Give your project a name like "Contact Form Handler"

// 6. Deploy as Web App

// Click "Deploy" > "New deployment"
// Click the gear icon ⚙️ next to "Type" and select "Web app"
// Set the configuration:

// Execute as: Me (your email)
// Who has access: Anyone

// Click "Deploy"
// Copy the Web App URL (it starts with https://script.google.com/macros/s/...)

// 7. Get Your Google Sheet ID

// Create a new Google Sheet at https://sheets.google.com
// Look at the URL: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
// Copy the long ID between /d/ and /edit

// 8. Update Your React Component
// In your React project, replace this line:
// javascriptconst GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
// With your actual Web App URL:
// javascriptconst GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
// File Structure Reminder:
// Your React Project/
// ├── src/
// │   └── components/
// │       └── Contact.jsx  ← Your React component goes here
// └── ...

// Google Apps Script (separate platform)
// └── Contact Form Handler ← The Google Apps Script code goes here
// The Google Apps Script code acts as a backend service that receives data from your React form and saves it to Google Sheets. It's completely separate from your React project!