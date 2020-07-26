var unorderedList = document.getElementById("unorderedList");

function addTask() {
    var taskToDo = document.getElementById("task");


    //LIST
    var li = document.createElement("li");
    var liText = document.createTextNode(taskToDo.value);
    li.appendChild(liText);
    li.setAttribute("class", "list")

    //Delete Button
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete Task")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    delbtn.setAttribute("class", "liBtn debtn btn btn-primary")
    delbtn.setAttribute("id", "delBtn")
    delbtn.setAttribute("onclick", "deleteTask(this)")

    //Edit Button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit Task")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class", "liBtn edbtn btn btn-primary")
    editBtn.setAttribute("id", "editBtn")
    editBtn.setAttribute("onclick", "editTask(this)")


    unorderedList.appendChild(li)

    taskToDo.value = ""

    console.log(li);
}

function deleteTask(x) {
    x.parentNode.remove()
}

function deleteAll() {
    unorderedList.innerHTML = ""
}

function editTask(y) {
    var change = prompt("Enter New Task", y.parentNode.firstChild.nodeValue)
    y.parentNode.firstChild.nodeValue = change;
}