export default function CancelTech() {
    let clearSection = [document.getElementById('languages'), document.getElementById('frameworks'), document.getElementById('developer-tools'), document.getElementById('libraries')]
    for (let i = 0; i < clearSection.length; i++) {
        clearSection[i].value = ''
    }
    let form = document.getElementById('techForm')
    form.classList.add('hidden')
    let addBtn = document.getElementById('addTech')
    addBtn.classList.remove('hidden')
}