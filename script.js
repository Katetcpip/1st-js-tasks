let count = 0
let username = prompt("Enter your name")
let myTitle = document.getElementById('header')

if (username) { myTitle.innerHTML = "Your to-do list, " + username } else myTitle.innerHTML = "Your to-do list, anonymous"


function makeTask() {
    let myContainer = document.getElementById('table')
    let myInput = document.getElementById('input')
    let value = myInput.value
    count = count + 1

    if (count <= 5) {
        myContainer.innerHTML = myContainer.innerHTML + "<p>Task " + count + ". " + value
    } else prompt("5 tasks only!")
}