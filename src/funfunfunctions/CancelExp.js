import killChildren from './killChildren';

export default function CancelExp() {
    let clearSection = [document.getElementById('job-title'), document.getElementById('date-worked'), document.getElementById('company'), document.getElementById('location-experience')];
    clearSection.forEach( input => {
        input.value = ''
    })

    killChildren(document.getElementById('bullet-points'))

    document.getElementById('expForm').classList.add('hidden')
    document.getElementById('addExp').classList.remove('hidden')
}