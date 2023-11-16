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
const convertTextToExcel_1 = __importDefault(require("./utils/convertTextToExcel"));
const getPdfText_1 = __importDefault(require("./utils/getPdfText"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const texts = yield (0, getPdfText_1.default)();
            yield (0, convertTextToExcel_1.default)(texts);
            console.log("Data extracted and converted to Excel successfully.");
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    });
}
main();
