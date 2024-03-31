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

// Function if element is pressed on time
function onTime() {
  var target = document.getElementById('red');
  target.style.display = 'none';
      document.getElementById('green').style.display = 'inline';
}

document.getElementById("red").addEventListener("click", function() {
  var delay = Math.floor(Math.random() * 4000) + 1000;
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

function start3() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    target.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    target.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    startTime = new Date().getTime();
  }