// To-Do List with localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const taskListElement = document.getElementById("taskList");

function renderTasks() {
  taskListElement.innerHTML = "";
  taskList.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => removeTask(i);
    taskListElement.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task) {
    taskList.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function removeTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}
renderTasks();

// Product Filter & Sort
const products = [
  { name: "Smartphone", category: "electronics", price: 300, rating: 4.5 },
  { name: "T-Shirt", category: "clothing", price: 20, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 800, rating: 4.8 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.3 }
];

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;
  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - ₹${p.price} - ⭐ ${p.rating}`;
    productList.appendChild(div);
  });
}
filterProducts();
