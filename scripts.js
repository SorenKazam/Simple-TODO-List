const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

input.addEventListener("keydown", (button) => {
  if (button.key === "Enter") {
    addTask(input.value);
    input.value = "";
  }
});

function addTask(value) {
  let li = document.createElement("li");
  li.textContent = value;

  li.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  taskList.appendChild(li);
}
