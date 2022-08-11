const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

// Step 1
function updateContent(identification,content){
    notesData.findOneAndUpdate({identificationNumber: identification},{contents: content},{returnOriginal: false});
}


// Step 2