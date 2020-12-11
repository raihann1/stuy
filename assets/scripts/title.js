var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Stuyvesant Class of 2024')
  .pauseFor(300)
  .deleteChars(6)
  .typeString('Stuyvesant co24')
  .pauseFor(1000)
  .start();
