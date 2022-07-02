const saludar = () => {
    alert('Hola! Este es un mensaje')
}

document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.getElementById('btn')
    inputBtn.addEventListener('click', saludar)
})