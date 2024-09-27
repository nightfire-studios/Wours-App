//All Variable Declarations
const add_button = document.querySelector('.add_button')
const task_container = document.querySelector('.task_container')
const analytics_container = document.querySelector('.analytics')
const history_container = document.querySelector('.history')
const trey = document.querySelector('.trey')
const analytics = document.querySelector('.analytics_button')
const history_btn = document.querySelector('.history_btn')
const footer_buttons = document.querySelectorAll('.footer_buttons')

const all_views = [analytics_container,task_container,history_container]

// End variable declaratrion
const hapticVibration = ()=>{
    if(navigator.vibrate){
        navigator.vibrate(30)
    }else{
        alert('Your device does not support haptic feedback')
    }
  }



add_button.onclick= ()=>{
    // task_container.innerHTML =''

    task_container.style.cssText = `
        border-bottom: 1px solid gray;
    `
    //targetPosition is defined to help scroll position to work on all devices. nb: it wasnt working on android
    const targetPosition = (trey.scrollWidth - trey.offsetWidth) * .5

    trey.scrollTo(
        {
            left: targetPosition,
            behavior: 'smooth'
        }
    )

    hapticVibration()
}

analytics.onclick = () => {
    const targetPosition = (trey.scrollWidth - trey.offsetWidth) * -.5
    trey.scrollTo(
        {
            left: targetPosition,
            behavior: 'smooth'
        }
    )

    hapticVibration()
}

history_btn.onclick = ()=>{

    const targetPosition = (trey.scrollWidth - trey.offsetWidth) * 1

    trey.scrollTo(
        {
            left: targetPosition,
            behavior: 'smooth'
        }
    )

    hapticVibration()
}

trey.scrollLeft = (trey.scrollWidth - trey.offsetWidth) * .5

//Get index checking when the element is within the container or element trey view port
// const getElementInView = ()=>{
//     var indexInView 
//     all_views.forEach((items,index)=>{
//         const viewBounds = items.getBoundingClientRect()
//         const treyBound = trey.getBoundingClientRect()

        

//         if(viewBounds.left >= treyBound.left && viewBounds.right <= treyBound.right){
//             indexInView = index
            
//         }

       
//     })
//     return indexInView
    
// }
// trey.addEventListener('touchend', ()=>{
//     setTimeout(() => {
//         const index = getElementInView();
//         console.log(index);
//     }, 500);
// })

// Function to detect which element is closest to the center of the trey while scrolling

const getElementClosestToView = () => {
    let closestIndex
    let minDistance = Infinity; // A large value to compare with distances
  
    const treyCenter = trey.scrollLeft + trey.offsetWidth / 2; // Center of the trey (viewport)
  
    all_views.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2; // Center of each item
  
      // Calculate the distance of the item center to the trey center
      const distance = Math.abs(itemCenter - treyCenter);
  
      // If this distance is smaller than the previously stored distance, update closestIndex
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
  
    return closestIndex;
  };
  
  // Add the scroll event listener to detect the closest element while scrolling
  trey.addEventListener('scroll', () => {
    const viewIndex = getElementClosestToView();

    footer_buttons.forEach((items,index)=>{
        items.style.width = '20px'
        if(index === viewIndex){
            items.style.width = '40px'

            if(index === 1){
                 items.style.width = '60px'
            }
        }
      })
  });

 
  