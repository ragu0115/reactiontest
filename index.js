var timer, startTime;


// Function if element is pressed on time
function onTime() {
  var target = document.getElementById('red');
  target.style.display = 'none';
      document.getElementById('green').style.display = 'inline';
      startTime = new Date().getTime();
}

// Function for start element
function start() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    document.getElementById('red').style.display = 'inline';
    var delay = Math.random() * 4000 + 1000;
    timer = setTimeout(onTime, delay);
  }

// Building Reaction time test

// Function if element is pressed early
function early() {
  clearTimeout(timer);
  var target = document.getElementById('red');
  target.style.display = 'none';
  document.getElementById('yellow').style.display = 'inline';
}

// Function if we reach the early click element
function reset() {
  document.getElementById('yellow').style.display = 'none';
  document.getElementById('blue').style.display = 'inline';
  document.getElementById('white').style.display = 'none';
}

document.getElementById('green').addEventListener('click', click);

function click() {
  document.getElementById('green').style.display = 'none';
  document.getElementById('white').style.display = 'inline';
  var endTime = new Date().getTime();
  var reactionTime = (endTime - startTime) / 1000;
  document.getElementById('white').textContent = "Reaction Time: " 
  + reactionTime.toFixed(3) + " seconds \n" + "Click to restart!";
}
