// Function to extract data from PDF
const fs = require("fs");
const pdf = require("pdf-parse");

async function getPdfText() {
  try {
    const pdfFilePath = "./src/files/testData.pdf";
    const dataBuffer = fs.readFileSync(pdfFilePath);
    const data = await pdf(dataBuffer);

    // Extract text content from PDF and split by pages
    const pages = data.text.split("\f"); // '\f' is the form feed character denoting a new page

    // Create an object to store text data for each page
    const pageTextData: any = [];
    pages.forEach((page: any, pageIndex: any) => {
      console.log(`PAGE ${pageIndex + 1}: `, page);
      pageTextData.push(page);
    });

    // Extract text content from PDF
    return data.text;
  } catch (error: any) {
    console.log("Get PDF Text Error: ", error);
  }
}

export default getPdfText;
