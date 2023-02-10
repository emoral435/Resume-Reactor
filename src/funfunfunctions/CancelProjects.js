import killChildren from './killChildren';

export default function CancelPro() {
    let clearSection = [document.getElementById('project-title'), document.getElementById('stack-used')];
    clearSection.forEach( input => {
        input.value = ''
    })

    killChildren(document.getElementById('bullet-points-project'))

    document.getElementById('proForm').classList.add('hidden')
    document.getElementById('addProjects').classList.remove('hidden')
}