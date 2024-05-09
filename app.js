const pepsi1 = document.querySelector('.pepsi-1')
const pepsi2 = document.querySelector('.pepsi-2')
const pepsi3 = document.querySelector('.pepsi-3')
const mainImg = document.querySelector('.main-img')

// changing background color and main img
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

// displaying navigation
const showMenu = (toggleId,navLinksId)=>{
    const toggle = document.querySelector(toggleId);
    const navLinks = document.querySelector(navLinksId);

    toggle.addEventListener('click',()=>{
        const visibilty = navLinks.getAttribute('data-visible');
        
        if(visibilty === 'false'){
            navLinks.setAttribute('data-visible',true);
            toggle.classList.replace('fa-bars','fa-times')
            toggle.setAttribute('aria-expanded',true);
        }
        else{
            navLinks.setAttribute('data-visible',false); 
            toggle.classList.replace('fa-times','fa-bars');
            toggle.setAttribute('aria-expanded',false); 
        }
        document.body.classList.toggle('hidden');
        
    })
}
showMenu('.fas','.nav-links');