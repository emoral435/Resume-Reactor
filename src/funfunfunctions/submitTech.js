import { techSkills, techFactory } from '../funfunfunctions/techSkills';

export default function  submitTech() {
    const lang = document.getElementById('languages')
    const frameworks = document.getElementById('frameworks')
    const tools = document.getElementById('developer-tools')
    const libraries = document.getElementById('libraries')
    const loopArray = [lang, frameworks, tools, libraries]
    for (let i = 0; i < loopArray.length; i++) {
        techSkills[i] = techFactory(loopArray[i].id, loopArray[i].value)
        loopArray[i].value = ''
    }
    let loadedTechSkills = document.getElementById('loaded-tech-skills')
    let techForm = document.getElementById('techForm')
    loadedTechSkills.classList.remove('hidden')
    techForm.classList.add('hidden')
}