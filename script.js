document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const position = document.getElementById("position").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && position && email) {
    addEmployee(name, position, email);
    document.getElementById("employeeForm").reset();
  }
});

function addEmployee(name, position, email) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${name} - ${position} (${email})</span>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  document.getElementById("employeeList").appendChild(li);
}
