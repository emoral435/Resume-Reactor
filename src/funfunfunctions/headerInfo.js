
let nameFactory = (first = "", last ="") => {
    return ({
        first, last
    })
}

let linkFactory = (linkArray =[]) => {
    return {
        linkArray
    }
} 

let headerInfo = [nameFactory(), linkFactory()]

export {
    headerInfo, linkFactory, nameFactory
}