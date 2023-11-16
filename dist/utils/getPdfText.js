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
Object.defineProperty(exports, "__esModule", { value: true });
// Function to extract data from PDF
const fs = require("fs");
const pdf = require("pdf-parse");
function getPdfText() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pdfFilePath = "./src/files/testData.pdf";
            const dataBuffer = fs.readFileSync(pdfFilePath);
            const data = yield pdf(dataBuffer);
            // Extract text content from PDF and split by pages
            const pages = data.text.split("\f"); // '\f' is the form feed character denoting a new page
            // Create an object to store text data for each page
            const pageTextData = [];
            pages.forEach((page, pageIndex) => {
                console.log(`PAGE ${pageIndex + 1}: `, page);
                pageTextData.push(page);
            });
            // Extract text content from PDF
            return data.text;
        }
        catch (error) {
            console.log("Get PDF Text Error: ", error);
        }
    });
}
exports.default = getPdfText;
