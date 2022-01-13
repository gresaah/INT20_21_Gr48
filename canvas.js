var canvas = document.getElementById('triangle');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(100, 0);
  context.lineTo(50, 100);

  context.closePath();

  context.fillStyle = "rgb(78, 193, 243)";
  context.fill();