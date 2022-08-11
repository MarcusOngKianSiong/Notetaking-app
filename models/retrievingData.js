const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function findFirstDocumentIdentificationNumber(){
    console.log("----FINDING FIRST DOCUMENT IDENTIFICATION NUMBER----")
    return notesData.findOne().identificationNumber;
}

module.exports = findFirstDocumentIdentificationNumber