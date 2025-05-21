let dataId = 1;
function createTodoElement(todo) {
  let list = document.getElementById("todo-list");
  // --------------------------------------------------------------------------
  //create:

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  todo.id = dataId++;

  li.setAttribute("data-id",  todo.id );
  list.appendChild(li);

  const textSapn = document.createElement("span");
  textSapn.textContent = todo.task;
  li.appendChild(textSapn);
  if (todo.deadline) {
    const timeSpan = document.createElement("span");
    timeSpan.classList.add("badge");
    timeSpan.classList.add("bg-primary");
    getRemainingDays(todo.deadline) === "Deadline passed"
      ? (timeSpan.textContent = ` ${getRemainingDays(todo.deadline)}`)
      : (timeSpan.textContent = ` ${getRemainingDays(
          todo.deadline
        )} DeadLine : ${todo.deadline} `);

    li.appendChild(timeSpan);
  }

  const btnSpan = document.createElement("span");
  btnSpan.classList.add("badge");
  btnSpan.classList.add("bg-primary");
  btnSpan.classList.add("rounded-pill");
  li.appendChild(btnSpan);

  const completIcon = document.createElement("i");
  completIcon.classList.add("fa");
  completIcon.classList.add("fa-check");
  completIcon.setAttribute("aria-hidden", "true");
  btnSpan.appendChild(completIcon);

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa");
  removeIcon.classList.add("fa-trash");
  removeIcon.setAttribute("aria-hidden", "true");
  btnSpan.appendChild(removeIcon);

  //event:

  //line-through:
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("fa-check")) {
      if (!todo.completed) {
        todo.completed = true;
        li.style.textDecoration = "line-through";
      } else {
        todo.completed = false;
        li.style.textDecoration = "none";
      }
    }
    //remove:

    if (e.target.classList.contains("fa-trash")) {
      todos.splice(todos.indexOf(todo), 1);
      li.remove();
    }
  });
}
function populateTodoList(todo) {
  todo.forEach((todo) => createTodoElement(todo));
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

//set data :
const inputToDo = document.querySelector("#todoInput").parentElement;
const divCol = document.createElement("div");
divCol.classList.add("col-auto");
inputToDo.insertAdjacentElement("afterend", divCol);

const inputTime = document.createElement("input");
inputTime.classList.add("form-control");
inputTime.setAttribute("type", "datetime-local");
divCol.appendChild(inputTime);
// set input todo:
const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");
//func listener:
function addNewTodo(e) {
  e.preventDefault();
  if (!input.value) return alert("Please enter a task.😃❤️");
  let todo = {
    task: input.value.trim(),
    completed: false,
    deadline: inputTime.value || null,
  };
  todos.push(todo);
  input.value = "";
  inputTime.value = "";
  createTodoElement(todo);
}
btn.addEventListener("click", addNewTodo);

//create => delete all complete todos:
const deleteAllCompleted = document.createElement("button");
deleteAllCompleted.classList.add("delete-all");
deleteAllCompleted.classList.add("btn");
deleteAllCompleted.textContent = "delete all";
deleteAllCompleted.classList.add("btn-primary");
const divParent = document.querySelector(".card");
divParent.insertAdjacentElement("afterend", deleteAllCompleted);

function deleteAllCompletedTodos() {
  todos.forEach((todo) => {
    console.log(todo.completed);
    if (todo.completed) {
      let li = document.querySelector(`.list-group-item[data-id="${todo.id}"]`);
      if (li) {
        li.remove();
      }
    }
  });
  todos = todos.filter((todo) => !todo.completed);
}
deleteAllCompleted.addEventListener("click", deleteAllCompletedTodos);

function getRemainingDays(diedline) {
  const now = new Date();
  const target = new Date(diedline);
  const diff = target - now;
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
  return daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed";
}
