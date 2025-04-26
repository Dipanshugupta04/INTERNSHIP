const colorButton = document.getElementById('colorButton')
const greetingButton = document.getElementById('greetingButton')
const greetingText = document.getElementById('greetingText')
const greetingSection=document.getElementById('greeting')
const calculateButton = document.getElementById('calculateButton')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const result = document.getElementById('result')

const colors = ['#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#1abc9c']
let currentColorIndex = 0

// colorButton.addEventListener('click', () => {
//     currentColorIndex = (currentColorIndex + 1) % colors.length
//     colorButton.style.backgroundColor = colors[currentColorIndex]
// })

greetingButton.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length
    greetingSection.style.backgroundColor = colors[currentColorIndex]
    const hour = new Date().getHours()
    let greeting

    if (hour < 12) {
        greeting = 'Good morning!'
    } else if (hour < 18) {
        greeting = 'Good afternoon!'
    } else {
        greeting = 'Good evening!'
    }

    greetingText.textContent = `${greeting} The current time is ${new Date().toLocaleTimeString()}`
})

calculateButton.addEventListener('click', () => {
    const value1 = parseFloat(num1.value) || 0
    const value2 = parseFloat(num2.value) || 0
    const sum = value1 + value2
    result.textContent = `Result: ${sum}`
}) 