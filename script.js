
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const customer = document.getElementById("customer").value;
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  const widthChi = (width / 30.3).toFixed(1);
  const heightChi = (height / 30.3).toFixed(1);
  const areaPing = (width * height / 3025).toFixed(1);

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${customer}</td>
    <td>${width} / ${widthChi}</td>
    <td>${height} / ${heightChi}</td>
    <td>${areaPing}</td>
  `;
  document.getElementById("record-body").appendChild(row);

  document.getElementById("form").reset();
});

function downloadExcel() {
  let table = document.querySelector("table");
  let rows = Array.from(table.rows);
  let csv = rows.map(row => Array.from(row.cells).map(cell => cell.innerText).join(",")).join("\n");

  let blob = new Blob([csv], { type: "text/csv" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "curtain_data.csv";
  a.click();
  URL.revokeObjectURL(url);
}
