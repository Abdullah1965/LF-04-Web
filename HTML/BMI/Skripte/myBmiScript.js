let bmiBerechnen = function() {
	let koerpergroesse = parseInt(document.getElementById("groesse").value);
	let koerpergewicht = parseInt(document.getElementById("gewicht").value);
	let bmi = koerpergewicht / Math.pow(koerpergroesse, 2) * 10000;
	document.getElementById("bmiWert").value = Math.round(bmi * 100)/100;
	let rechnerFrame = document.getElementById("bmiRechner");

	if (bmi > 0) {
		if (bmi>=30) {
			let neuerAbsatz = document.createElement("p");
			neuerAbsatz.setAttribute("id", "uebergewicht");
			neuerAbsatz.innerHTML = "Sie haben leider starkes Übergewicht!";
			neuerAbsatz.style.color = "red";
			rechnerFrame.append(neuerAbsatz);
		}
		else {
			while (document.getElementById("uebergewicht") !== null) {
				rechnerFrame.removeChild(document.getElementById("uebergewicht"));
			}
		}
	}
	else {
		document.getElementById("bmiWert").value = "Bitte sowohl Körpergröße als auch -gewicht eingeben!";
	}
}
document.getElementById("cmd_bmiBerechnen").addEventListener('click', bmiBerechnen);