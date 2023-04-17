// Create a program in JavaScript that reads a CSV file and converts it into an array of objects.

function csvToArray(csvString) {
  let rows = csvString.split("\n");
  const headers = rows[0].split(",");
  let data = [];

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i].split(",");
    let rowData = {};

    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }

    data.push(rowData);
  }

  return data;
}

let csvData = `Name,Age,Country
John,30,USA
Jane,25,Canada
Bob,40,Australia`;

let arrayOfObjects = csvToArray(csvData);
console.log(arrayOfObjects);
