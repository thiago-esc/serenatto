const inputMode = document.querySelector('#modoNoturno')
const htmlBody = document.querySelector('body')

inputMode.addEventListener('click', () => {
    const mode = inputMode.checked ? 'dark' : ''
    htmlBody.setAttribute('data-bs-theme', mode)
})

