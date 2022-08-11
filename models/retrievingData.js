const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function findFirstDocumentIdentificationNumber(){
    console.log("----FINDING FIRST DOCUMENT IDENTIFICATION NUMBER----")
    console.log(notesData.findOne().identificationNumber)
    return notesData.find()[0].identificationNumber;
}

module.exports = findFirstDocumentIdentificationNumber