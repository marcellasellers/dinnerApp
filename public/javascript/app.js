console.log('Client side js has loaded')

const restaurant = document.querySelector('form') // creates object of submit button
const search = document.querySelector('input') // creates object from searched titem
const msg1 = document.querySelector('#res')
restaurant.addEventListener('submit', (e) => {
    e.preventDefault() // makes sure it doesn't refresh page automatically
    msg1.textContent = 'Loading..'
    const loc = search.value //grabs value from input form
    console.log(loc)
    msg1.textContent = loc
})