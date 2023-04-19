function convert() {
    let i1 = Number(document.getElementById("input1").value);
    let i2 = Number(document.getElementById("input2").value);
    let fv = (i1 / i2) * 100;
    let result = document.getElementById("result");
    result.innerHTML = fv.toFixed(2) + "% Percentage";
  }