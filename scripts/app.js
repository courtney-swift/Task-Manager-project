//This URL is the server direction

const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask(){

    //1. Get values from the DOM
const title = $("#txtTitle").val();
const desc = $("#txtDescription").val();
const color = $("#selColor").val();
const date = $("#selDate").val();
const status = $("#selStatus").val();
const budget = $("#numBudget").val();

    //2. Create an Object using our Class (Model)
    const taskToSave = new Task(title, desc, color, date, status, budget);
    console.log(taskToSave)
    displayTask(taskToSave);
}

//temporal

function displayTask(task){
    let syntax = `
    <div class="task" style="border-color:${task.color}">
    <div class="info">
    <h4>${task.title}</h4>
    <p>${task.desc}</p>
    </div>
    <label class="status">${task.status}</label>
    <div class="date-budget">
    <label>${task.date}</label>
    <label>${task.budget}</label>
    </div>
    </div>
    `;

    //inject the new HTML into the DOM Tree
    $(".list").append(syntax);

}
function loadTask(){
    $.ajax({
        type:"GET",
        url:API,
        success: function(data){
            console.log(data)
        },
        error: function(err){
            console.log(err);
        }
    })
}
function init(){
    console.log("Hello World");
    $("#btnSave").click(saveTask);
}




window.onload = init; //Force that the HTML and the CSS gets resolved before that I run the logic
