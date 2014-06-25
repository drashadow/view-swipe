var swipe = {};
exports = swipe;


var DOC = document;

function generateTransform(direction) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  if (direction == "left") {
    return "translateX(-" + width + "px)";
  }

  if (direction == "right") {
    return "translateX(" + width + "px)";
  }

  if (direction == "top") {
    return "translateY(-" + height + "px)";
  }

  if (direction == "bottom") {
    return "translateY(" + height + "px)";
  }
}

swipe.stack = [];

swipe.in = function (view, direction) {
  running = true;
  var elem = view.elem;
  var container = DOC.createElement('div');
  container.setAttribute('class', 'swipe-container');

  var inner = DOC.createElement('div');
  inner.setAttribute('class', 'swipe-inner');

  container.appendChild(inner);
  inner.appendChild(elem);

  DOC.body.appendChild(container);

  inner.style.webkitTransform = generateTransform(direction);
  setTimeout(function () {
    inner.style.webkitTransform = "";
  }, 0);
  swipe.stack.push(container);
}

swipe.out = function (direction) {
  var viewElem = swipe.stack.pop();
  if (viewElem) {
    viewElem.querySelector('.swipe-inner').style.webkitTransform = generateTransform(direction);
  }
}