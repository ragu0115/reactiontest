// Function for start element
function start() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    document.getElementById('red').style.display = 'inline';
  }

// Building Reaction time test

// Function if element is pressed early
function early() {
  var target = document.getElementById('red');
  target.style.display = 'none';
  document.getElementById('yellow').style.display = 'inline';
}

// Function if we reach the early click element
function reset() {
  document.getElementById('yellow').style.display = 'none';
  document.getElementById('blue').style.display = 'inline';
}

// Function if element is pressed on time
function onTime() {
  var target = document.getElementById('red');
  target.style.display = 'none';
      document.getElementById('green').style.display = 'inline';
}

function wait() {
    var target = document.getElementById('red');
    var delay = Math.random() * 4000 + 1000;
    var timer = setTimeout(onTime, delay);
  }

function click() {
    var target = document.getElementById('green');
    target.style.display = 'none';
    startTime = new Date().getTime();
  }

