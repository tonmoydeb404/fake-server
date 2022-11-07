// required third party packages
const path = require("path");
const { faker } = require("@faker-js/faker");
const fs = require("fs");

// root database structure
const db = {
  notes: [],
};
// file name
const FILE = "db.json";

// type your code from here
// this is a demo of generating fake data
for (let i = 1; i <= 100; i++) {
  const text = faker.lorem?.lines(2);
  const date = faker.date?.recent(10);

  db.notes.push({ id: i, text, date });
}

// convert to json data
const jsonData = JSON.stringify(db);

// write to json file
fs.writeFile(path.resolve(__dirname, FILE), jsonData, "utf8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("fake data generated in: " + FILE);
  }
});
