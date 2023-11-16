import convertTextToExcel from "./utils/convertTextToExcel";
import getPdfText from "./utils/getPdfText";

async function main() {
  try {
    const texts = await getPdfText();
    await convertTextToExcel(texts);

    console.log("Data extracted and converted to Excel successfully.");
  } catch (error: any) {
    console.error("Error:", error.message);
  }
}

main();
