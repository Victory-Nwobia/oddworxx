
let taskinput = document.getElementById("text-input").value;
 let tasklist = document.getElementById("tasks");

// add new task

function newtask(){
    let tasktext = textinput.value;
    

    
    if (tasktext === ""){
        alert("Enter a task");
    }
    else
        {

        let newtask = document.createElement("div");
        newtask.setAttribute("id", "task-item");

        newtask.innerHTML = `<p id="task-text" onclick="donetask(this)">${tasktext}</p>
        <button onclick="deletetask(this)" id="delete-btn">Delete</button>`;

         tasklist.appendChild(newtask);
      
    }
        document.getElementById("text-input").value = "";
        saveData();
}

//done task

window.doneTask = function (element) {
    let textprop = element.style.textDecoration;
    if (textprop === "none") {
        element.style.textDecoration = "line-through";
        element.style.color = "gray";
        saveData();
        
    } else {
        element.style.textDecoration = "none";
        element.style.color = "black";

        saveData();
    }
}

//delete task

window.deleteTask = function (button) {
    button.parentElement.remove();

    saveData();
}

// local storage -- save data

function saveData(){
    localStorage.setItem("data", tasklist.innerHTML);

}

// local storage -- retrieve data

function showTask(){
    tasklist.innerHTML = localStorage.getItem("data");

     // Reattach event listeners
     document.querySelectorAll(".task-text").forEach(task => {
        task.onclick = function () { donetask(this); };
    });
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.onclick = function () { deletetask(this); };
    });
}

showTask();