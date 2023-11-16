import keysData from "../data/keys";

const ExcelJS = require("exceljs");

// Function to create Excel file and write data
async function convertTextToExcel(texts: any) {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    // Print fixed text in cells A1 to A28
    keysData.forEach((text, index) => {
      worksheet.getCell(`A${index + 1}`).value = text;
      worksheet.getCell(`A${index + 1}`).font = { size: 12 };
    });

    // Adjust the bottom border to specific row
    const boldBorderRows = [8, 21, 27];
    boldBorderRows.forEach((rowIndex) => {
      const row = worksheet.getRow(rowIndex);
      row.border = {
        bottom: { style: "thin", color: { argb: "00000000" } },
      };
    });

    // Set the first row height
    worksheet.getRow(1).height = 50;

    // Calculate the maximum width of the content in column A
    const maxTextWidth = Math.max(...keysData.map((text) => text.length));

    // Set the width of column A to fit the content
    worksheet.getColumn("A").width = maxTextWidth;

    /*
      // Split text data into rows
      const rows = textData.split("\n");
    
      // Add data to Excel worksheet
      rows.forEach((row: any, rowIndex: any) => {
        const columns = row.split("\t"); // Assuming tab-separated values, adjust accordingly
    
        columns.forEach((column: any, columnIndex: any) => {
          worksheet.getCell(rowIndex + 1, columnIndex + 1).value = column;
        });
      });
    */

    // Save Excel file
    const excelFilePath = "./src/files/file.xlsx";
    await workbook.xlsx.writeFile(excelFilePath);
  } catch (error: any) {
    console.log("Convert To Excel Error: ", error);
  }
}

export default convertTextToExcel;
