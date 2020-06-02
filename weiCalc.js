function calcWeights() {
    var tWei = Number(document.getElementById('tWeight').value);
    document.getElementById("demo").innerHTML = String(tWei);
    var table = document.getElementById('weights');
    var row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = String((tWei * 0.8).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.6).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.4).toFixed(1));
    row.insertCell(0).innerHTML = String(tWei);
}
document.getElementById('sBtn').addEventListener("click", function () {
    calcWeights();
});
