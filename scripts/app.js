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
}

function init(){
    console.log("Hello World");
    $("#btnSave").click(saveTask);
}




window.onload = init; //Force that the HTML and the CSS gets resolved before that I run the logic
