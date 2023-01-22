// this is how we will be storing the information that the user will input for their education section of their resume

let eduInfo = []

let eduFactory = (uni, location, major, grad) => {
    return {
        uni,
        location,
        major,
        grad
    }
}

export {
    eduInfo,
    eduFactory
}