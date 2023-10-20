// VARIABILI GLOBALI
const Container = document.querySelector(".wrapper");
let Message = "";

// CREAZIONE LOOP

for (let i = 1; i <= 100; i++) {
  //   Message += "<div>" + i + "</div>";

  if (i % 3 === 0 && i % 5 === 0) {
    Message += "<div class='Fizz-buzz'> FizBuzz </div>";
  } else if (i % 3 === 0) {
    Message += "<div class='Fizz'> Fizz </div>";
  } else if (i % 5 === 0) {
    Message += "<div class='Buzz'> Buzz </div>";
  } else {
    Message += "<div class='JustNumber'>" + i + "</div>";
  }
}

// RESULT

console.log(Message + Container);

Container.innerHTML = Message;
