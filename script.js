const cube = document.querySelector("#cube");
document.addEventListener("mousedown", () => {
  if (cube.classList.contains("jump")) return;
  cube.classList.add("jump");

  setTimeout(() => {
    cube.classList.remove("jump");
  }, 800);
});
document.addEventListener("keypress", (e) => {
  if (e.key != " ") return;
  if (cube.classList.contains("jump")) return;
  cube.classList.add("jump");

  setTimeout(() => {
    cube.classList.remove("jump");
  }, 800);
});

const ul = document.querySelector(".objects");
function createObject() {
  const li = document.createElement("li");
  const obj = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", "./ant.PNG");
  obj.appendChild(img);
  obj.classList.add("object");
  obj.classList.add("run");
  li.appendChild(obj);
  ul.appendChild(li);
  return li;
}

function objectChain() {
  const li = createObject();
  setTimeout(() => {
    objectChain();
  }, 1000 + parseInt(3 * Math.random()) * 1000);
  setTimeout(() => {
    ul.removeChild(li);
  }, 10000);
}

objectChain();

setInterval(() => {
  const objects = document.querySelectorAll(".object");
  objects.forEach((element) => {
    let objLeft = element.offsetLeft;
    let objWidth = element.offsetWidth;
    let objHeight = element.offsetHeight;
    let objTop = element.offsetTop;
    let cubeTop = cube.offsetTop;
    let cubeWidth = cube.offsetWidth;
    let cubeLeft = cube.offsetLeft;
    let cubeHeight = cube.offsetHeight;
    // console.log(cubeBottom, " - ", objBottom + objHeight);
    if (
      objLeft < cubeLeft + cubeWidth &&
      objLeft > cubeLeft - objWidth &&
      cubeTop + cubeHeight > objTop
    ) {
      alert("You lost");
    }
  });
}, 10);
