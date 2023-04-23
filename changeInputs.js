
 function changeInputs() {
        const personType = document.getElementById("person-type").value;
        const personFizica = document.getElementById("person-fizica");
        const personJuridica = document.getElementById("person-juridica");

    if (personType === "fizica") {
          personFizica.style.display = "block";
          personJuridica.style.display = "none";
    }
     else {
          personFizica.style.display = "none";
          personJuridica.style.display = "block";
        }
  }
   