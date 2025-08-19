let button = document.querySelector('.btn')
let input = document.querySelector('input')
let error = document.querySelector('.err-msg')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button.addEventListener('click', () => {
   const check = emailRegex.test(input.value.trim())

   if(!check){
    error.style.display = 'block'
   }
   else{
    error.style.display = 'none'
    input.value = ''
   }
})