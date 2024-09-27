//All Variable Declarations
const add_button = document.querySelector('.add_button')
const task_container = document.querySelector('.task_container')
const nav_buttons = document.querySelectorAll('.nav_buttons')

add_button.onclick= ()=>{
    task_container.innerHTML =''

    task_container.style.cssText = `
        border-bottom: 1px solid gray;
    `
}

nav_buttons.forEach((items,index)=>{

    items.onclick = ()=>{
        

        nav_buttons.forEach(buttons=>{
            buttons.style.width = '30px'
        })

        items.style.width = '60px'
    }
})