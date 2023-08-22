const pepsi1 = document.querySelector('.pepsi-1')
const pepsi2 = document.querySelector('.pepsi-2')
const pepsi3 = document.querySelector('.pepsi-3')
const mainImg = document.querySelector('.main-img')
const bars = document.querySelector('.fa-bars')
const primaryNav = document.querySelector('.nav-links')

pepsi1.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#0062be'
    mainImg.src = 'images/pepsi001.png'
})
pepsi2.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#e60c2c'
    mainImg.src = 'images/pepsi002.png'
})
pepsi3.addEventListener('click',()=>{
    document.body.style.backgroundColor = '#1e1e1e'
    mainImg.src = 'images/pepsi003.png'
})

bars.addEventListener('click',()=>{
    primaryNav.classList.toggle('active')
    document.body.classList.toggle('hidden')
    if(bars.classList.contains('fa-bars')){
        bars.classList.replace('fa-bars','fa-times')
    }
    else{
        bars.classList.replace('fa-times','fa-bars')

    }
})