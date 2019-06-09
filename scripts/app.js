let next_button = document.querySelector('.next-button')
let last_button = document.querySelector('.last-button')

let position = 0

// dom to translate
let last = document.querySelector('.last .content')
let current = document.querySelector('main .content .project .img .content')
let next = document.querySelector('.next .content')

// dom to change color
let contour = document.querySelector('main .contour')

// dom to change text
let id = document.querySelector('main .content .id')
let title = document.querySelector('main .content h2')

const color=['#B81800','#EFC1A7','#D1D1D1']
const title_data = ['CONCEPT PAGE UNSPLASH','CONCEPT PAGE FOR A BLOG','THIBAULT’S PORTFOLIO']

next_button.addEventListener('click', ()=>{
    if(position<2){
        position ++
        last.style.transform = `translateX(${-(position-1)*100}%)`
        current.style.transform = `translateX(${-position*102}%)`
        next.style.transform = `translateX(${-position*100}%)`
        contour.style.border = `7px solid ${color[position]}`
        title.textContent= title_data[position]
        id.textContent = `0${position+1}`
    }

})
last_button.addEventListener('click', ()=>{
    if(position>0){
        position --
        if(position ==0){
            last.style.transform = `transform: translateX(100%)`
            current.style.transform = `translateX(${position*101.5}%)`
            next.style.transform = `translateX(${position*100}%)`
        }else{
            
            last.style.transform = `translateX(${(position-1)*100}%)`
            current.style.transform = `translateX(${position*101.5}%)`
            next.style.transform = `translateX(${position*100}%)`
        }
        contour.style.border = `7px solid ${color[position]}`
        title.textContent= title_data[position]
        id.textContent = `0${position+1}`
    }

})