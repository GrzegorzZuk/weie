function calcWeights() {
    let tWei: number = Number((document.getElementById('tWeight') as HTMLInputElement).value);
    document.getElementById("demo").innerHTML = String(tWei);

    let table = document.getElementById('weights') as HTMLTableElement;
    let row = table.insertRow(table.rows.length);
    
    row.insertCell(0).innerHTML = String((tWei * 0.8).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.6).toFixed(1));
    row.insertCell(0).innerHTML = String((tWei * 0.4).toFixed(1));
    row.insertCell(0).innerHTML = String(tWei);
}

document.getElementById('sBtn').addEventListener("click", () => {
    calcWeights();
})