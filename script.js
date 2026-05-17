// 🎨 Color Palette Generator
const palette = document.getElementById("palette");
const colors = ["#06b6d4", "#0ea5e9", "#16a34a", "#f59e0b", "#dc2626", "#9333ea"];

colors.forEach(color => {
  const box = document.createElement("div");
  box.style.background = color;
  box.title = color;
  box.addEventListener("click", () => {
    document.body.style.background = color + "20"; // تغيير خلفية الصفحة بلون شفاف
  });
  palette.appendChild(box);
});

// 📊 Table Data Generator
const tableBody = document.getElementById("table-body");
const data = [
  { id: 1, name: "John Doe", role: "Developer", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Designer", status: "Pending" },
  { id: 3, name: "Bob Johnson", role: "Manager", status: "Active" },
  { id: 4, name: "Alice Brown", role: "QA Engineer", status: "Inactive" }
];

data.forEach(row => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.id}</td>
    <td>${row.name}</td>
    <td>${row.role}</td>
    <td class="status-${row.status.toLowerCase()}">${row.status}</td>
  `;
  tableBody.appendChild(tr);
});

// ✅ Smart Tasks
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    <span>${taskText}</span>
    <button>Delete</button>
  `;
  task.querySelector("button").addEventListener("click", () => {
    task.remove();
  });
  taskList.appendChild(task);
}
