function moneyConvert() {
    let input = +document.getElementById("moneyInput").value;
    let source = +document.getElementById("sourceUnit").value;
    let destination = +document.getElementById("destUnit").value;
    let convert = input * destination / source;
    document.getElementById("moneyConvert").innerText = "Result: " + convert;
}