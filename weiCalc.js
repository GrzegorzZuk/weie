function calcWeights() {
    var tWei = Number(document.getElementById('tWeight').value);
    document.getElementById("demo").innerHTML = String(tWei);
    var table = document.getElementById('weights');
    var row = table.insertRow(table.rows.length);
    var idx = table.rows.length;
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("delete entry"));
    row.id = "row" + String(idx);
    delBtn.setAttribute('index', String(idx));
    delBtn.addEventListener('click', deleteRow);
    // delBtn.addEventListener("click", deleteRow);
    var del = row.insertCell(0);
    del.appendChild(delBtn);
    row.insertCell(0).innerHTML = String((tWei * 0.8).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.6).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.4).toFixed(1));
    row.insertCell(0).innerHTML = String(tWei);
}
function deleteRow(btn) {
    var row = document.getElementById("row" + btn.target.getAttribute('index'));
    row.parentNode.removeChild(row);
}
document.getElementById('sBtn').addEventListener("click", function () {
    calcWeights();
});
