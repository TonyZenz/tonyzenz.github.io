const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

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