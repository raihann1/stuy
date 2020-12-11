var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Stuyvesant Class of 2024')
  .pauseFor(300)
  .start();
