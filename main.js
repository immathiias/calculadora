const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', function () {
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (event) {
    event.preventDefault()

    if (allowedKeys.includes(event.key)) {
        input.value += event.key
        return;
    }

    if (event.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }

    if (event.key === 'Enter') {
        calculate()
    }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
    resultInput.value = 'ERRO!'
    resultInput.classList.add('error')

    resultInput.value = result
    resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', function (event) {
    const button = event.currentTarget

    if (button.innerText === 'Copiar') {
        button.innerText = 'Copiado!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = "Copiar"
        button.classList.remove('success')
    }
})

document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === "dark") {
        root.style.setProperty('--bg-color', '#d8dadb')
        root.style.setProperty('--border-color', '#282be6')
        root.style.setProperty('--font-color', '#02010a')
        root.style.setProperty('--primary-color', '#0d2b8b')
        main.dataset.theme = "light"
    } else {
        root.style.setProperty('--bg-color', '#02010a')
        root.style.setProperty('--border-color', '#0b0d6d')
        root.style.setProperty('--font-color', '#d8dadb')
        root.style.setProperty('--primary-color', '#184bf1')
        main.dataset.theme = "dark"
    }
})