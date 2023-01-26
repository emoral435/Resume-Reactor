import { techSkills } from "./techSkills"

export default function deleteTech() {
    techSkills.splice(0, techSkills.length)
    let loadedTech = document.getElementById('loaded-tech-skills')
    loadedTech.classList.add('hidden')
    let addBtn = document.getElementById('addTech')
    addBtn.classList.remove('hidden')
}