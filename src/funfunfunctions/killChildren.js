export default function killChildren(parentNode) {
    while (parentNode.hasChildNodes()) {
        parentNode.removeChild(parentNode.firstChild)
    }
}