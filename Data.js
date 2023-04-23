const form = document.getElementById("forms");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const Option = document.getElementById("person-type").value;
 
  if (Option === "fizica") {
    console.log("Date persoana fizica: ", data);
  } else if (Option === "juridica") {
    console.log("Date persoana juridica: ", data);
  }

  form.reset();
});

