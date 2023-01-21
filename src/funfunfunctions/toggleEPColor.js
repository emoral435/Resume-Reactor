// this function toggles teh colors of the edit and preview buttons, thats all
export default function toggle(e) {
    let parent = e.target.parentNode
    let editBtn = document.getElementById('edit-btn')
    let previewBtn = document.getElementById('preview-btn')
    if (parent.id == 'preview-btn') {
        editBtn.classList.replace('bg-[#ff8500]', 'bg-[#ffaa00]')
        previewBtn.classList.replace('bg-[#ffaa00]','bg-[#ff8500]')
    } else {
        previewBtn.classList.replace('bg-[#ff8500]', 'bg-[#ffaa00]')
        editBtn.classList.replace('bg-[#ffaa00]','bg-[#ff8500]')
    }
}