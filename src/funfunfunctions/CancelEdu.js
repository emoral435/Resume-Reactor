export default function CancelEdu() {
    let clearSection = [document.getElementById('eduSchool'), document.getElementById('eduLocation'),document.getElementById('eduGrad'), document.getElementById('eduMajor')]
    for (let i = 0; i < clearSection.length; i++) {
        clearSection[i].value = ''
    }
    let form = document.getElementById('eduForm')
    form.classList.add('hidden')
    let addBtn = document.getElementById('addEducation')
    addBtn.classList.remove('hidden')
}