let add = document.querySelector(".add");
let input = document.querySelector(".submit");
let submitButton = document.querySelector(".submitInput");
let textInput = document.querySelector(".input");
const tasks = document.getElementById("tasks");
let checked = document.querySelector(".done");
let remove = document.querySelector(".remove");
let dontTasks = document.querySelector("#doneTasks");
//add button
add.addEventListener("click", () => {
  if (input.style.display == "flex") {
    input.style.display = "none";
  } else {
    input.style.display = "flex";
  }
  input.addEventListener("keyup", (event) => {
    if (event.key == "Escape") {
      input.style.display = "none";
    }
  });
});
// add task
submitButton.addEventListener("click", () => {
  if (textInput.value == "") {
    alert("sho malk?");
    return;
  }

  const task = document.createElement("li"); //creates an li in the tasks
  const editTextInput = document.createElement("input"); // from 21 to 24 creating the editable text input
  editTextInput.className = "editTextInput"; ///
  editTextInput.value = textInput.value; /// gives the value of the original name
  editTextInput.style.display = "none"; //// always there but hidden
  const div = document.createElement("div");
  div.style.marginBottom = "-11px";
  div.textContent = textInput.value; //whatever is written in the submit gives it to div
  div.style.display = "flex";
  task.appendChild(editTextInput); // when we want to edi the text
  task.appendChild(div); //gives the tasks
  const doneButton = document.createElement("div"); //creates a div to add text to it for when its done
  const editButton = document.createElement("div"); //creates a div to add text to it for when its edited
  const deleteButton = document.createElement("div");
  doneButton.className = "clickableTask";
  editButton.className = "clickableTask";
  deleteButton.className = "clickableTask";
  doneButton.textContent = "done";
  editButton.textContent = "edit";
  deleteButton.textContent = "delete";
  task.appendChild(editButton);
  task.appendChild(doneButton);
  task.appendChild(deleteButton);
  tasks.appendChild(task);
  input.style.display = "none";

  
  doneButton.addEventListener("click", (event) => {
    const text = event.target.parentNode.childNodes[1].textContent;
    tasks.removeChild(event.target.parentNode); //removes the task (the list)
    const donetasklist = document.createElement("li");
    const doneFinish = document.createElement("div");
    doneFinish.className = "clickableTask";
    doneFinish.textContent = "delete";
    donetasklist.textContent = text; //gives the text content to the dont tasks
    donetasklist.appendChild(doneFinish);
    dontTasks.appendChild(donetasklist); //dontTask are the finished tasks
    doneFinish.addEventListener("click", (event) => {
      dontTasks.removeChild(event.target.parentNode);
    });
  });

  textInput.value = ""; // so when you want to add another task it stars fresh
  editButton.addEventListener("click", () => {
    div.style.display = "none";
    editTextInput.style.display = "block";
    editButton.style.display = "none";
    doneButton.style.display = "none";
    deleteButton.style.display = "none";
  });
  editTextInput.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      if (event.target.value != "") {
        div.textContent = event.target.value;
        editTextInput.style.display = "none";
        div.style.display = "flex";
        editButton.style.display = "inline-block";
        doneButton.style.display = "inline-block";
        deleteButton.style.display = "inline-block";
      } else {
        alert("sho btthbl");
      }
    }
    if (event.key == "Escape") {
      div.style.display = "flex";
      editTextInput.style.display = "none";
      editButton.style.display = "inline-block";
      doneButton.style.display = "inline-block";
      deleteButton.style.display = "inline-block";
    }
  });
  deleteButton.addEventListener("click", (event) => {
    tasks.removeChild(event.target.parentNode);
  });
  /// submit starts workinng
});
