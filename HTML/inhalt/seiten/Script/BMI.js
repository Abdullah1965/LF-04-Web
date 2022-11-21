let BMI = () => {
    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseInt(document.getElementById("kg").value);
    let erg = document.getElementById("erg");

    if (!isNaN(cm) && !isNaN(kg)) {
        let x = kg / Math.pow((cm / 100), 2);

        erg.value = x;
        erg.style.color = "green"
    } else{
        erg.value = "Bitte geben sie die Größe und das Gewicht ein";
        erg.style.color = "red";
    }

}