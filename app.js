const spans = document.querySelectorAll(".container span");
const container = document.querySelector(".container");
const title = document.querySelector(".title h1");
const maiContainer = document.querySelector(".main-container");
const btnX = document.querySelector(".x");
const btnO = document.querySelector(".o");
const rest = document.querySelector(".rest");
const class1 = document.querySelectorAll(".class1");
const class2 = document.querySelectorAll(".class2");
const class3 = document.querySelectorAll(".class3");
const class4 = document.querySelectorAll(".class4");
const class5 = document.querySelectorAll(".class5");
const class6 = document.querySelectorAll(".class6");
const class7 = document.querySelectorAll(".class7");
const class8 = document.querySelectorAll(".class8");
const checkJs = document.querySelector(".checkJs");
const check = document.querySelector(".check");
const startNewGame = document.querySelector(".startNewGame");
let spanStatus = false;
let player_x = "X";
let player_o = "O";

btnX.addEventListener("click", firstChose);

function firstChose() {
  check.style.visibility = "visible";
  rest.style.visibility = "visible";
  container.style.visibility = "visible";
  title.style.visibility = "visible";
  maiContainer.style.visibility = "hidden";
  spans.forEach((span) =>
    span.addEventListener("click", () => {
      if (spanStatus === false) {
        span.innerHTML = player_x;
        span.classList.add("myX");
        span.style.pointerEvents = "none";
        spanStatus = true;
        checkForWin();
      } else if (spanStatus === true) {
        span.innerHTML = player_o;
        span.classList.add("myO");
        span.style.pointerEvents = "none";
        spanStatus = false;
        checkForWin();
      }
    })
  );
}

btnO.addEventListener("click", SecondChose);
function SecondChose() {
  check.style.visibility = "visible";
  rest.style.visibility = "visible";
  container.style.visibility = "visible";
  title.style.visibility = "visible";
  maiContainer.style.visibility = "hidden";
  spans.forEach((span) =>
    span.addEventListener("click", () => {
      if (spanStatus === false) {
        span.innerHTML = player_o;
        span.classList.add("myX");
        span.style.pointerEvents = "none";
        spanStatus = true;
        checkForWin();
      } else if (spanStatus === true) {
        span.innerHTML = player_x;
        span.classList.add("myO");
        span.style.pointerEvents = "none";
        spanStatus = false;
        checkForWin();
      }
    })
  );
}

rest.addEventListener("click", () => {
  location.reload();
});

function gameOver() {
  spans.forEach((span) => {
    span.style.cursor = "notAllowed";
    span.style.pointerEvents = "none";
    startNewGame.style.visibility = "visible";
  });
}
function checkForWin() {
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].innerHTML == player_x &&
      class1[1].innerHTML == player_x &&
      class1[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class1.length; i++) {
    if (
      class1[0].innerHTML == player_o &&
      class1[1].innerHTML == player_o &&
      class1[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].innerHTML == player_x &&
      class2[1].innerHTML == player_x &&
      class2[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class2.length; i++) {
    if (
      class2[0].innerHTML == player_o &&
      class2[1].innerHTML == player_o &&
      class2[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].innerHTML == player_x &&
      class3[1].innerHTML == player_x &&
      class3[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class3.length; i++) {
    if (
      class3[0].innerHTML == player_o &&
      class3[1].innerHTML == player_o &&
      class3[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class4[0].innerHTML == player_x &&
      class4[1].innerHTML == player_x &&
      class4[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class4.length; i++) {
    if (
      class4[0].innerHTML == player_o &&
      class4[1].innerHTML == player_o &&
      class4[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].innerHTML == player_x &&
      class5[1].innerHTML == player_x &&
      class5[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class5.length; i++) {
    if (
      class5[0].innerHTML == player_o &&
      class5[1].innerHTML == player_o &&
      class5[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].innerHTML == player_x &&
      class6[1].innerHTML == player_x &&
      class6[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class6.length; i++) {
    if (
      class6[0].innerHTML == player_o &&
      class6[1].innerHTML == player_o &&
      class6[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].innerHTML == player_x &&
      class7[1].innerHTML == player_x &&
      class7[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class7.length; i++) {
    if (
      class7[0].innerHTML == player_o &&
      class7[1].innerHTML == player_o &&
      class7[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].innerHTML == player_x &&
      class8[1].innerHTML == player_x &&
      class8[2].innerHTML == player_x
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
  for (i = 0; i < class8.length; i++) {
    if (
      class8[0].innerHTML == player_o &&
      class8[1].innerHTML == player_o &&
      class8[2].innerHTML == player_o
    ) {
      check.style.visibility = "visible";
      checkJs.innerHTML = "Winn";
      checkJs.style.color = "green";
      setTimeout(gameOver, 1000);
    }
  }
}
