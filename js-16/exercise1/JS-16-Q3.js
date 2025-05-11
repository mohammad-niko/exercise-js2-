// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const iMessage = document.querySelector(".ri-close-line");
const message = document.querySelector('.message');

iMessage.addEventListener("click",()=>{
    message.remove()
})
