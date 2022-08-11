const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function findFirstDocumentIdentificationNumber(){
    console.log("----FINDING FIRST DOCUMENT IDENTIFICATION NUMBER----")
    notesData.find((error,data)=>{
        console.log(data[0])
        return data[0].identificationNumber;
    })
}

module.exports = findFirstDocumentIdentificationNumber;