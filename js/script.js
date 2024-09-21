//All Variable Declarations
const add_button = document.querySelector('.add_button')
const task_container = document.querySelector('.task_container')

add_button.onclick= ()=>{
    task_container.innerHTML =''

    task_container.style.cssText = `
        border-bottom: 1px solid gray;
    `
}