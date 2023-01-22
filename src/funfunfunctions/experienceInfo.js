// this is how we will be storing the information that the user will input for their experience section of their resume

let expInfo = []

let expFactory = (uni, location, major, grad) => {
    return {
        uni,
        location,
        major,
        grad
    }
}

export {
    expInfo,
    expFactory
}