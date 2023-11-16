"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = __importDefault(require("../data/keys"));
const ExcelJS = require("exceljs");
// Function to create Excel file and write data
function convertTextToExcel(texts) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet("Sheet 1");
            // Print fixed text in cells A1 to A28
            keys_1.default.forEach((text, index) => {
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
            const maxTextWidth = Math.max(...keys_1.default.map((text) => text.length));
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
            yield workbook.xlsx.writeFile(excelFilePath);
        }
        catch (error) {
            console.log("Convert To Excel Error: ", error);
        }
    });
}
exports.default = convertTextToExcel;
