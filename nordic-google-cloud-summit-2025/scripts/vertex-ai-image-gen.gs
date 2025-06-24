/**
 * Generates an image using Vertex AI (Imagen model) and saves it to Google Drive.
 * Make sure to fill in your own GCP configuration details securely.
 */

function saveImage() {
  const base64Data = generateImage();
  const mimeType = "image/png";
  const fileName = "Generated Image from Gemini";

  const decodedData = Utilities.base64Decode(base64Data);
  const blob = Utilities.newBlob(decodedData, mimeType, fileName);

  const folderName = "Gemini Images";
  const folder = DriveApp.createFolder(folderName);
  folder.createFile(blob);
}

function generateImage() {
  const PROJECT_ID = "YOUR_PROJECT_ID"; // 🔒 Replace securely
  const LOCATION_ID = "YOUR_LOCATION_ID"; // Example: "us-central1"
  const API_ENDPOINT = `${LOCATION_ID}-aiplatform.googleapis.com`;
  const MODEL_ID = "YOUR_MODEL_ID"; // Example: "imagen-4.0-generate-preview-05-20"

  const apiUrl = `https://${API_ENDPOINT}/v1/projects/${PROJECT_ID}/locations/${LOCATION_ID}/publishers/google/models/${MODEL_ID}:predict`;

  const payload = {
    instances: [
      {
        prompt: "Generate an image of an astronaut standing on Mars and waving at the camera."
      }
    ],
    parameters: {
      aspectRatio: "1:1",
      sampleCount: 1,
      includeRaiReason: true,
      outputOptions: {
        mimeType: "image/png"
      }
    }
  };

  const options = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ScriptApp.getOAuthToken()}`
    },
    contentType: 'application/json',
    muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  };

  const response = UrlFetchApp.fetch(apiUrl, options);
  const parsed = JSON.parse(response.getContentText());

  if (!parsed.predictions || !parsed.predictions.length) {
    throw new Error("No predictions received from Vertex AI.");
  }

  return parsed.predictions[0].bytesBase64Encoded;
}
