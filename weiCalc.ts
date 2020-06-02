function calcWeights() {
    let tWei: number = Number((document.getElementById('tWeight') as HTMLInputElement).value);
    document.getElementById("demo").innerHTML = String(tWei);

    let table = document.getElementById('weights') as HTMLTableElement;
    let row = table.insertRow(table.rows.length);
    let idx: number = table.rows.length;
    
    let delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("delete entry"));
    row.id = "row"+String(idx);
    delBtn.setAttribute('index', String(idx));
    delBtn.addEventListener('click', deleteRow);
    // delBtn.addEventListener("click", deleteRow);

    let del = row.insertCell(0);
    del.appendChild(delBtn);
    row.insertCell(0).innerHTML = String((tWei * 0.8).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.6).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.4).toFixed(1));
    row.insertCell(0).innerHTML = String(tWei);
}

function deleteRow(btn) {
    let row = document.getElementById("row"+btn.target.getAttribute('index'))
    row.parentNode.removeChild(row);
    
}

document.getElementById('sBtn').addEventListener("click", () => {
    calcWeights();
})