let next_button = document.querySelector('.next-button')

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
    position ++
    last.style.transform = `translateX(${-(position-1)*100}%)`
    current.style.transform = `translateX(${-position*100}%)`
    next.style.transform = `translateX(${-position*100}%)`
    contour.style.background = color[position]
    title.textContent= title_data[position]
    id.textContent = `0${position+1}`

})