const { Socket } = require("socket.io");

const accountsData = require("../public/database/accessPoint.js").accountsData;
const notesData = require("../public/database/accessPoint.js").notesData;

function updateContent(naming,identificationNumber,contents)
notesData.findOneAndUpdate({name: naming,identificationNumber: identificationNumber},{contents: contents});

