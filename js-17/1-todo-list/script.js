function todoList(todos) {
  // Write your code here...
  const div = document.querySelector("#content");

  const ul = document.createElement("ul");
  div.appendChild(ul);

  todos.forEach(({ todo }) => {
    const li = document.createElement("li");
    li.textContent = todo;
    ul.appendChild(li);

    li.addEventListener("click", () => {
      li.classList.toggle("active");
      if (li.classList.contains("active")) {
        li.style.textDecorationLine = "line-through";
      } else {
        li.style.textDecorationLine = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
