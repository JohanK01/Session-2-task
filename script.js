
var tasks = ["Buy milk", "Clean room", "Pay bills"];

function displayTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    taskList.innerHTML += "<li>" + task[i] + "</li>";
  }
}
