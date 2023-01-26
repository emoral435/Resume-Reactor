export default function Popup(idButton, idForm) {
    let btn = document.getElementById(idButton)
    btn.classList.add('hidden')
    let formPopup = document.getElementById(idForm)
    formPopup.classList.remove('hidden')
} 