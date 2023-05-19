function BMI(){
    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseInt(document.getElementById("kg").value);
    let erg = document.getElementById("erg").value;

    if (!NaN(cm) && !NaN(kg)){
        let bmiwert = kg / Math.pow((cm/100),2);
        if (bmiwert > 0 && bmiwert < 25){
            let newstaz = document.createElement("p");
            newstaz.setAttribute("id","normal");
            newstaz.style.color = "green";
            erg.value = bmiwert;
        }else {
            let newstaz = document.createElement("p");
            newstaz.setAttribute("id","über");
            newstaz.style.color = "ref";
            erg.value = bmiwert;
        }
    }

}