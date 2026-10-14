import fs from 'fs';
import path from 'path';

// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
const filePath = path.join(__dirname, '280_Users.json');
console.log('File path:', filePath);

const fileData = fs.readFileSync(filePath,'utf-8');
const userDataJSObject = JSON.parse(fileData);//parse
console.log(userDataJSObject);//{ username: 'admin', password: 'admin123' }

console.log(userDataJSObject.username);//admin
console.log(userDataJSObject.password);//admin123

// Writing Data to a JSON File
//this is object
const user = {
  name: "Pramod",
  role: "QA Trainer"
};

const jsonData = JSON.stringify(user);

// /fs.writeFileSync("output.json", jsonData);
fs.writeFileSync(path.join(__dirname, 'output.json'), jsonData);
console.log("JSON file created successfully");

//npx tsx 283_Read_Write_FS.ts as it has no test so its not playwright file

/*
File path: C:\Users\Kavita Batra\Documents\LearningPlaywrightFundamentals3x\tests\19_Data_Driven_Testing\280_Users.json
{ username: 'admin', password: 'admin123' }
admin
admin123
JSON file created successfully
output.json
*/