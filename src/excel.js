const ExcelJS = require('exceljs');

const workbook = new ExcelJS.Workbook();    

workbook.creator = 'Me';
workbook.lastModifiedBy = 'Her';
workbook.created = new Date(1985, 8, 30);
workbook.modified = new Date();
workbook.lastPrinted = new Date(2016, 9, 27);

workbook.properties.date1904 = true;

workbook.calcProperties.fullCalcOnLoad = true;

console.log("In exceljs",workbook);