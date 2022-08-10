// Fundamental configuration
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + `account`;
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

// Schemas
const accountDataSchema = {username: String,password: String};
const notesDataSchema = {user: String, identificationNumber: String, dependencies: Number}

// Models (access point to the data)
const notes = mongoose.model('notes',notesDataSchema);
const account = mongoose.model('accounts',accountDataSchema); 

// Opening database connections
db.on('open',()=>{});

//Exporting
module.exports.notesData = notes;
module.exports.accountsData = account;