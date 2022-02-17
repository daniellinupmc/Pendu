let findMots = ["avion", "bateau", "voiture", "train", "fusee", "velo", "car", "moto"];

function randomMot() {
  return findMots[Math.floor(Math.random() * findMots.length)];
}

function guessMot() {
  guessWord = "";
  for (var i = 0; i < findMot.length; i++) {
    guessWord += "_";
  }
  document.getElementById("guessW").innerHTML = guessWord;
}

const alphabet = document.querySelectorAll(".alphabet");
let nbErreur = 0;
let findMot = randomMot();
let guessWord = "";
guessMot();

function NbTrouverLettres() {
  let nbLettreNonTrouver = 0;
  for (var i = 0; i < guessWord.length; i++) {
    if (guessWord[i] == "_") {
      nbLettreNonTrouver++;
    }
  }
  return nbLettreNonTrouver;
}

document.getElementById("rejouer").addEventListener("click", function (e) {
  e.preventDefault;

  //Pour ne pas avoir deux fois le même mot de suite
  let newMot = randomMot();
  while (findMot == newMot) {
    newMot = randomMot();
  }
  findMot = newMot;
  guessMot();
  document.getElementById("resultat").innerHTML = "";
  nbErreur = 0;
  for (var i = 0; i < alphabet.length; i++) {
    alphabet[i].disabled = false;
    alphabet[i].style.backgroundColor = "#4747da";
    alphabet[i].style.borderColor = "white";
    alphabet[i].style.color = "white";
  }
});

document.getElementById("rejouer").addEventListener("mouseover", function () {
  document.getElementById("rejouer").style.backgroundColor = "#4747da";
});

document.getElementById("rejouer").addEventListener("mouseout", function () {
  document.getElementById("rejouer").style.backgroundColor = "#c73eb0";
});

alphabet.forEach(function (lettre) {
  lettre.addEventListener("click", function (e) {
    e.preventDefault;
    if (nbErreur < 10 && document.getElementById("resultat").innerHTML=="") {
      var nbDeLettreATrouverAvant = NbTrouverLettres();
      var modification = "";
      for (var i = 0; i < findMot.length; i++) {
        if (findMot[i] == lettre.value) {
          modification += lettre.value;
        } else {
          modification += guessWord[i];
        }
      }
      guessWord = modification;
      document.getElementById("guessW").innerHTML = guessWord;
      lettre.disabled = true;
      lettre.style.color = "#bebbbb";
      lettre.style.borderColor = "#bebbbb";
      lettre.style.backgroundColor = "#b34ca5";
      var nbDeLettreATrouverApres = NbTrouverLettres();
      if (nbDeLettreATrouverAvant - nbDeLettreATrouverApres == 0) {
        //Il n'y a pas eu de changement donc c'était une erreur
        nbErreur++;
        if (nbErreur == 10) {
          document.getElementById("resultat").innerHTML = "Tu as perdu la partie !";
        }
      } else if (nbDeLettreATrouverApres == 0) {
        document.getElementById("resultat").innerHTML = "Tu as gagné la partie !";
      }
    }
  });
});

alphabet.forEach(function (lettre) {
  lettre.addEventListener("mouseover", function () {
    lettre.style.backgroundColor = "#d368c1";
  });
});

alphabet.forEach(function (lettre) {
  lettre.addEventListener("mouseout", function () {
    lettre.style.backgroundColor = "#4747da";
  });
});
