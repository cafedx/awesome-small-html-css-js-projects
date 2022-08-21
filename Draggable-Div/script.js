let draggableElem = document.getElementById("draggable-elem");
let initialX = 0,
  initialY = 0;
let moveElement = false;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

draggableElem.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  moveElement = true;
});

draggableElem.addEventListener(events[deviceType].move, (e) => {
  if (moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
    draggableElem.style.top =
      draggableElem.offsetTop - (initialY - newY) + "px";
    draggableElem.style.left =
      draggableElem.offsetLeft - (initialX - newX) + "px";
    initialX = newX;
    initialY = newY;
  }
});

draggableElem.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
);

draggableElem.addEventListener("mouseleave", stopMovement);
draggableElem.addEventListener(events[deviceType].up, (e) => {
  moveElement = false;
});