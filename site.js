const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const key = "It's a secret to everybody."

// greetings object
const greetings = {
    morning: 'Good Morning!',
    afternoon: 'Good Afternoon!',
    evening: 'Good Evening!🧛'
}

//ternary check for time of day message
const timeOfDay = isMorning ? 'morning' : isAfternoon ? 'afternoon' : 'evening'
const timedWelcome = greetings[timeOfDay]

//find "welcome" class and set welcome message
document.querySelector('.welcome').innerHTML = `<span>${timedWelcome}</span`

localStorage.setItem(key,'I AM ERROR')

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://pbs.twimg.com/media/FY9_2pIXwAAcFjv?format=jpg&name=900x900',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage++
    showImages()
}, 5000)

const next = document.querySelector('#next')
const prev = document.querySelector('#prev' )

next.addEventListener('click',() => {
    currentImage++
    showImages()
})

prev.addEventListener('click',() => {
    currentImage--
    showImages()
})