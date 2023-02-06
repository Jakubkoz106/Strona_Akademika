const addButton = document.getElementById("add-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    var czas1 = document.getElementById('time1');
    var czas2 = document.getElementById('time2');

    if (!document.getElementById('check1').checked && !document.getElementById('check2').checked &&
        !document.getElementById('check3').checked && !document.getElementById('check4').checked &&
        !document.getElementById('check5').checked && !document.getElementById('check6').checked) {
        alert('Nie zaznaczono zadnego pokoju');
    //}else if(parseInt(czas1.split(":")[0])*60 + parseInt(czas1.split(":")[1]) >> parseInt(czas2.split(":")[0])*60 + parseInt(czas2.split(":")[1])){
        //alert('czas');
    }else{
        location.href= "poZalogowaniu.html";
    }

})
function myFunction() {
  var txt;
  if (confirm("Potwierdź złożenie wniosku")) {
    txt = "Twój wniosek został złożony. ";

  } else {
    txt = "Twój wniosek zawiera błędy i został odrzucony.";
  }
  document.getElementById("demo").innerHTML = txt;
}