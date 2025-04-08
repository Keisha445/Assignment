// Get reference to the table
const table = document.getElementById("multiplicationTable");

// Create table header row
let headerRow = "<tr><th>x</th>";
for (let i = 1; i <= 10; i++) {
  headerRow += "<th>" + i + "</th>";
}
headerRow += "</tr>";
table.innerHTML += headerRow;

// Create the rest of the rows
for (let i = 1; i <= 10; i++) {
  let row = "<tr><th>" + i + "</th>";
  for (let j = 1; j <= 10; j++) {
    row += "<td>" + (i * j) + "</td>";
  }
  row += "</tr>";
  table.innerHTML += row;
}