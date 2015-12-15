var canvas = document.getElementById('exampleCanvas'),
    context = canvas.getContext('2d');

context.fillStyle = 'yellow';
context.fillRect(0, 0, 200, 220);

context.fillStyle = 'red';
context.fillRect(200, 0, 120, 220);

context.beginPath();
context.fillStyle='blue';
context.arc(160, 107, 60, 0, Math.PI*2, false);
context.closePath();
context.fill();