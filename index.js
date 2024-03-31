function start() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    document.getElementById('red').style.display = 'inline';
  }

function wait() {
    var target = document.getElementById('red');
    target.style.display = 'none';
    startTime = new Date().getTime();
  }

function start2() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    target.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    target.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    startTime = new Date().getTime();
  }

function start3() {
    var target = document.getElementById('blue');
    target.style.display = 'none';
    target.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    target.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    startTime = new Date().getTime();
  }