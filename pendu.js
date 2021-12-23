let findMots = ["avion","bateau","voiture","train","fusee","velo","car","moto",];

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
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < alphabet.length; i++) {
    document.getElementById(alphabet[i]).disabled = false;
    document.getElementById(alphabet[i]).style.backgroundColor = "#4747da";
    document.getElementById(alphabet[i]).style.borderColor = "white";
    document.getElementById(alphabet[i]).style.color = "white";
  }
});

document.getElementById("rejouer").addEventListener("mouseover", function () {
  document.getElementById("rejouer").style.backgroundColor = "#4747da";
});

document.getElementById("rejouer").addEventListener("mouseout", function () {
  document.getElementById("rejouer").style.backgroundColor = "#c73eb0";
});

document.getElementById("a").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("a").value) {
        modification += document.getElementById("a").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("a").disabled = true;
    document.getElementById("a").style.color = "#bebbbb";
    document.getElementById("a").style.borderColor = "#bebbbb";
    document.getElementById("a").style.backgroundColor = "#b34ca5";
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

document.getElementById("b").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("b").value) {
        modification += document.getElementById("b").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("b").disabled = true;
    document.getElementById("b").style.color = "#bebbbb";
    document.getElementById("b").style.borderColor = "#bebbbb";
    document.getElementById("b").style.backgroundColor = "#b34ca5";
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

document.getElementById("c").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("c").value) {
        modification += document.getElementById("c").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("c").disabled = true;
    document.getElementById("c").style.color = "#bebbbb";
    document.getElementById("c").style.borderColor = "#bebbbb";
    document.getElementById("c").style.backgroundColor = "#b34ca5";
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

document.getElementById("d").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("d").value) {
        modification += document.getElementById("d").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("d").disabled = true;
    document.getElementById("d").style.color = "#bebbbb";
    document.getElementById("d").style.borderColor = "#bebbbb";
    document.getElementById("d").style.backgroundColor = "#b34ca5";
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

document.getElementById("e").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("e").value) {
        modification += document.getElementById("e").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("e").disabled = true;
    document.getElementById("e").style.color = "#bebbbb";
    document.getElementById("e").style.borderColor = "#bebbbb";
    document.getElementById("e").style.backgroundColor = "#b34ca5";
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

document.getElementById("f").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("f").value) {
        modification += document.getElementById("f").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("f").disabled = true;
    document.getElementById("f").style.color = "#bebbbb";
    document.getElementById("f").style.borderColor = "#bebbbb";
    document.getElementById("f").style.backgroundColor = "#b34ca5";
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

document.getElementById("g").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("g").value) {
        modification += document.getElementById("g").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("g").disabled = true;
    document.getElementById("g").style.color = "#bebbbb";
    document.getElementById("g").style.borderColor = "#bebbbb";
    document.getElementById("g").style.backgroundColor = "#b34ca5";
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

document.getElementById("h").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("h").value) {
        modification += document.getElementById("h").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("h").disabled = true;
    document.getElementById("h").style.color = "#bebbbb";
    document.getElementById("h").style.borderColor = "#bebbbb";
    document.getElementById("h").style.backgroundColor = "#b34ca5";
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

document.getElementById("i").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("i").value) {
        modification += document.getElementById("i").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("i").disabled = true;
    document.getElementById("i").style.color = "#bebbbb";
    document.getElementById("i").style.borderColor = "#bebbbb";
    document.getElementById("i").style.backgroundColor = "#b34ca5";
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

document.getElementById("j").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("j").value) {
        modification += document.getElementById("j").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("j").disabled = true;
    document.getElementById("j").style.color = "#bebbbb";
    document.getElementById("j").style.borderColor = "#bebbbb";
    document.getElementById("j").style.backgroundColor = "#b34ca5";
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

document.getElementById("k").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("k").value) {
        modification += document.getElementById("k").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("k").disabled = true;
    document.getElementById("k").style.color = "#bebbbb";
    document.getElementById("k").style.borderColor = "#bebbbb";
    document.getElementById("k").style.backgroundColor = "#b34ca5";
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

document.getElementById("l").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("l").value) {
        modification += document.getElementById("l").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("l").disabled = true;
    document.getElementById("l").style.color = "#bebbbb";
    document.getElementById("l").style.borderColor = "#bebbbb";
    document.getElementById("l").style.backgroundColor = "#b34ca5";
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

document.getElementById("m").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("m").value) {
        modification += document.getElementById("m").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("m").disabled = true;
    document.getElementById("m").style.color = "#bebbbb";
    document.getElementById("m").style.borderColor = "#bebbbb";
    document.getElementById("m").style.backgroundColor = "#b34ca5";
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

document.getElementById("n").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("n").value) {
        modification += document.getElementById("n").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("n").disabled = true;
    document.getElementById("n").style.color = "#bebbbb";
    document.getElementById("n").style.borderColor = "#bebbbb";
    document.getElementById("n").style.backgroundColor = "#b34ca5";
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

document.getElementById("o").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("o").value) {
        modification += document.getElementById("o").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("o").disabled = true;
    document.getElementById("o").style.color = "#bebbbb";
    document.getElementById("o").style.borderColor = "#bebbbb";
    document.getElementById("o").style.backgroundColor = "#b34ca5";
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

document.getElementById("p").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("p").value) {
        modification += document.getElementById("p").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("p").disabled = true;
    document.getElementById("p").style.color = "#bebbbb";
    document.getElementById("p").style.borderColor = "#bebbbb";
    document.getElementById("p").style.backgroundColor = "#b34ca5";
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

document.getElementById("q").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("q").value) {
        modification += document.getElementById("q").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("q").disabled = true;
    document.getElementById("q").style.color = "#bebbbb";
    document.getElementById("q").style.borderColor = "#bebbbb";
    document.getElementById("q").style.backgroundColor = "#b34ca5";
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

document.getElementById("r").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("r").value) {
        modification += document.getElementById("r").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("r").disabled = true;
    document.getElementById("r").style.color = "#bebbbb";
    document.getElementById("r").style.borderColor = "#bebbbb";
    document.getElementById("r").style.backgroundColor = "#b34ca5";
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

document.getElementById("s").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("s").value) {
        modification += document.getElementById("s").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("s").disabled = true;
    document.getElementById("s").style.color = "#bebbbb";
    document.getElementById("s").style.borderColor = "#bebbbb";
    document.getElementById("s").style.backgroundColor = "#b34ca5";
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

document.getElementById("t").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("t").value) {
        modification += document.getElementById("t").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("t").disabled = true;
    document.getElementById("t").style.color = "#bebbbb";
    document.getElementById("t").style.borderColor = "#bebbbb";
    document.getElementById("t").style.backgroundColor = "#b34ca5";
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

document.getElementById("u").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("u").value) {
        modification += document.getElementById("u").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("u").disabled = true;
    document.getElementById("u").style.color = "#bebbbb";
    document.getElementById("u").style.borderColor = "#bebbbb";
    document.getElementById("u").style.backgroundColor = "#b34ca5";
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

document.getElementById("v").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("v").value) {
        modification += document.getElementById("v").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("v").disabled = true;
    document.getElementById("v").style.color = "#bebbbb";
    document.getElementById("v").style.borderColor = "#bebbbb";
    document.getElementById("v").style.backgroundColor = "#b34ca5";
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

document.getElementById("w").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("w").value) {
        modification += document.getElementById("w").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("w").disabled = true;
    document.getElementById("w").style.color = "#bebbbb";
    document.getElementById("w").style.borderColor = "#bebbbb";
    document.getElementById("w").style.backgroundColor = "#b34ca5";
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

document.getElementById("x").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("x").value) {
        modification += document.getElementById("x").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("x").disabled = true;
    document.getElementById("x").style.color = "#bebbbb";
    document.getElementById("x").style.borderColor = "#bebbbb";
    document.getElementById("x").style.backgroundColor = "#b34ca5";
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

document.getElementById("y").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("y").value) {
        modification += document.getElementById("y").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("y").disabled = true;
    document.getElementById("y").style.color = "#bebbbb";
    document.getElementById("y").style.borderColor = "#bebbbb";
    document.getElementById("y").style.backgroundColor = "#b34ca5";
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

document.getElementById("z").addEventListener("click", function (e) {
  e.preventDefault;
  if (nbErreur < 10) {
    var nbDeLettreATrouverAvant = NbTrouverLettres();
    var modification = "";
    for (var i = 0; i < findMot.length; i++) {
      if (findMot[i] == document.getElementById("z").value) {
        modification += document.getElementById("z").value;
      } else {
        modification += guessWord[i];
      }
    }
    guessWord = modification;
    document.getElementById("guessW").innerHTML = guessWord;
    document.getElementById("z").disabled = true;
    document.getElementById("z").style.color = "#bebbbb";
    document.getElementById("z").style.borderColor = "#bebbbb";
    document.getElementById("z").style.backgroundColor = "#b34ca5";
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

document.getElementById("a").addEventListener("mouseover", function () {
  document.getElementById("a").style.backgroundColor = "#d368c1";
});

document.getElementById("a").addEventListener("mouseout", function () {
  document.getElementById("a").style.backgroundColor = "#4747da";
});

document.getElementById("b").addEventListener("mouseover", function () {
  document.getElementById("b").style.backgroundColor = "#d368c1";
});

document.getElementById("b").addEventListener("mouseout", function () {
  document.getElementById("b").style.backgroundColor = "#4747da";
});

document.getElementById("c").addEventListener("mouseover", function () {
  document.getElementById("c").style.backgroundColor = "#d368c1";
});

document.getElementById("c").addEventListener("mouseout", function () {
  document.getElementById("c").style.backgroundColor = "#4747da";
});

document.getElementById("d").addEventListener("mouseover", function () {
  document.getElementById("d").style.backgroundColor = "#d368c1";
});

document.getElementById("d").addEventListener("mouseout", function () {
  document.getElementById("d").style.backgroundColor = "#4747da";
});

document.getElementById("e").addEventListener("mouseover", function () {
  document.getElementById("e").style.backgroundColor = "#d368c1";
});

document.getElementById("e").addEventListener("mouseout", function () {
  document.getElementById("e").style.backgroundColor = "#4747da";
});

document.getElementById("f").addEventListener("mouseover", function () {
  document.getElementById("f").style.backgroundColor = "#d368c1";
});

document.getElementById("f").addEventListener("mouseout", function () {
  document.getElementById("f").style.backgroundColor = "#4747da";
});

document.getElementById("g").addEventListener("mouseover", function () {
  document.getElementById("g").style.backgroundColor = "#d368c1";
});

document.getElementById("g").addEventListener("mouseout", function () {
  document.getElementById("g").style.backgroundColor = "#4747da";
});

document.getElementById("h").addEventListener("mouseover", function () {
  document.getElementById("h").style.backgroundColor = "#d368c1";
});

document.getElementById("h").addEventListener("mouseout", function () {
  document.getElementById("h").style.backgroundColor = "#4747da";
});

document.getElementById("i").addEventListener("mouseover", function () {
  document.getElementById("i").style.backgroundColor = "#d368c1";
});

document.getElementById("i").addEventListener("mouseout", function () {
  document.getElementById("i").style.backgroundColor = "#4747da";
});

document.getElementById("j").addEventListener("mouseover", function () {
  document.getElementById("j").style.backgroundColor = "#d368c1";
});

document.getElementById("j").addEventListener("mouseout", function () {
  document.getElementById("j").style.backgroundColor = "#4747da";
});

document.getElementById("k").addEventListener("mouseover", function () {
  document.getElementById("k").style.backgroundColor = "#d368c1";
});

document.getElementById("k").addEventListener("mouseout", function () {
  document.getElementById("k").style.backgroundColor = "#4747da";
});

document.getElementById("l").addEventListener("mouseover", function () {
  document.getElementById("l").style.backgroundColor = "#d368c1";
});

document.getElementById("l").addEventListener("mouseout", function () {
  document.getElementById("l").style.backgroundColor = "#4747da";
});

document.getElementById("m").addEventListener("mouseover", function () {
  document.getElementById("m").style.backgroundColor = "#d368c1";
});

document.getElementById("m").addEventListener("mouseout", function () {
  document.getElementById("m").style.backgroundColor = "#4747da";
});

document.getElementById("n").addEventListener("mouseover", function () {
  document.getElementById("n").style.backgroundColor = "#d368c1";
});

document.getElementById("n").addEventListener("mouseout", function () {
  document.getElementById("n").style.backgroundColor = "#4747da";
});

document.getElementById("o").addEventListener("mouseover", function () {
  document.getElementById("o").style.backgroundColor = "#d368c1";
});

document.getElementById("o").addEventListener("mouseout", function () {
  document.getElementById("o").style.backgroundColor = "#4747da";
});

document.getElementById("p").addEventListener("mouseover", function () {
  document.getElementById("p").style.backgroundColor = "#d368c1";
});

document.getElementById("p").addEventListener("mouseout", function () {
  document.getElementById("p").style.backgroundColor = "#4747da";
});

document.getElementById("q").addEventListener("mouseover", function () {
  document.getElementById("q").style.backgroundColor = "#d368c1";
});

document.getElementById("q").addEventListener("mouseout", function () {
  document.getElementById("q").style.backgroundColor = "#4747da";
});

document.getElementById("r").addEventListener("mouseover", function () {
  document.getElementById("r").style.backgroundColor = "#d368c1";
});

document.getElementById("r").addEventListener("mouseout", function () {
  document.getElementById("r").style.backgroundColor = "#4747da";
});

document.getElementById("s").addEventListener("mouseover", function () {
  document.getElementById("s").style.backgroundColor = "#d368c1";
});

document.getElementById("s").addEventListener("mouseout", function () {
  document.getElementById("s").style.backgroundColor = "#4747da";
});

document.getElementById("t").addEventListener("mouseover", function () {
  document.getElementById("t").style.backgroundColor = "#d368c1";
});

document.getElementById("t").addEventListener("mouseout", function () {
  document.getElementById("t").style.backgroundColor = "#4747da";
});

document.getElementById("u").addEventListener("mouseover", function () {
  document.getElementById("u").style.backgroundColor = "#d368c1";
});

document.getElementById("u").addEventListener("mouseout", function () {
  document.getElementById("u").style.backgroundColor = "#4747da";
});

document.getElementById("v").addEventListener("mouseover", function () {
  document.getElementById("v").style.backgroundColor = "#d368c1";
});

document.getElementById("v").addEventListener("mouseout", function () {
  document.getElementById("v").style.backgroundColor = "#4747da";
});

document.getElementById("w").addEventListener("mouseover", function () {
  document.getElementById("w").style.backgroundColor = "#d368c1";
});

document.getElementById("w").addEventListener("mouseout", function () {
  document.getElementById("w").style.backgroundColor = "#4747da";
});

document.getElementById("x").addEventListener("mouseover", function () {
  document.getElementById("x").style.backgroundColor = "#d368c1";
});

document.getElementById("x").addEventListener("mouseout", function () {
  document.getElementById("x").style.backgroundColor = "#4747da";
});

document.getElementById("y").addEventListener("mouseover", function () {
  document.getElementById("y").style.backgroundColor = "#d368c1";
});

document.getElementById("y").addEventListener("mouseout", function () {
  document.getElementById("y").style.backgroundColor = "#4747da";
});

document.getElementById("z").addEventListener("mouseover", function () {
  document.getElementById("z").style.backgroundColor = "#d368c1";
});

document.getElementById("z").addEventListener("mouseout", function () {
  document.getElementById("z").style.backgroundColor = "#4747da";
});
