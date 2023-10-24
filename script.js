function game() {
    gsap.set("#container",{
        backgroundColor: "rgba(185, 127, 255, 0.422)"
    })
  function printBubble() {
    var clutter = "";
    for (i = 1; i < 153; i++) {
      var randomNo = Math.floor(Math.random() * 10);

      clutter += `<div class="bubble">${randomNo}</div>`;
    }
    document.querySelector("#container").innerHTML = clutter;
  }

  function timer() {
    var timer = 60;
    var tl = setInterval(() => {
      document.querySelector(".timer .box").textContent = timer;
      if (timer == 0) {
        var tl2 = gsap.timeline();
        tl2
          .to(".bubble", {
            scale: 0,
            duration: 1,
          })
          .to("#container", {
            backgroundColor: "#b0bec5",
            duration:.1,
            onStart: function () {
              document.querySelector("#container").style.flexDirection =
                "column";
              document.querySelector(
                "#container"
              ).innerHTML = `<h1 class = "gameOver">oops times up!</h1> <div class = "playAgain"> play again</div> `;
              timer = 0;

              document.querySelector(".timer .box").textContent = timer;
              document
                .querySelector(".playAgain")
                .addEventListener("click", function () {
                  game();
                });
            },
          });

        clearInterval(tl);
      }
      timer--;
    }, 1000);
  }

  function hit() {
    var randomNo = Math.floor(Math.random() * 10);
    document.querySelector(".hit .box").textContent = randomNo;
  }

  document
    .querySelector("#container")
    .addEventListener("click", function (dets) {
      var score = Number(document.querySelector(".score .box").textContent);
      if (
        dets.target.textContent ==
        document.querySelector(".hit .box").textContent
      ) {
        score += 10;
        document.querySelector(".score .box").textContent = score;
        printBubble();
        var randomNo = Math.floor(Math.random() * 10);
        document.querySelector(".hit .box").textContent = randomNo;
      }
    });

  hit();
  printBubble();
  timer();
}

game();
