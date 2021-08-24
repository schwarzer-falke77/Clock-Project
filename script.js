const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const year = document.querySelector('.year')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const digitclock = document.querySelector('.digitclock')





function clock(){
    let secondy = new Date().getSeconds();
    let minuty = new Date().getMinutes();
    let houry = new Date().getHours();

    second.style.transform = `rotate(${360 + (secondy * 6)}deg)`
    minute.style.transform = `rotate(${360 + (minuty * 6)}deg)`
    hour.style.transform = `rotate(${360 + (houry * 30)}deg)`


}

function date(){
    let yeary = new Date().getFullYear()
    let monty = new Date().getMonth() + 1
    let dayi = new Date().getDate()

    year.firstChild.textContent = yeary
    month.firstChild.textContent = monty + '/'
    day.firstChild.textContent = dayi + '/'

console.log(yeary,monty,dayi)

}

function digit(){
    let secondy = new Date().getSeconds();
    let minuty = new Date().getMinutes();
    let houry = new Date().getHours();
    digitclock.firstChild.textContent =  ('0' + houry) + ':' + minuty + ':' +  secondy;

    
    
}
//This is my first Project as an amateur javascript dev.
//I could not add in secondy '0' when its < than 10.The same situation with minuty.
// I will upload this to gitHub to not lost more time with if else.
// Just want to go for next project. When i will be better i will fix it.
//Peace..













date()
setInterval(clock,1000)
setInterval(digit,1000)