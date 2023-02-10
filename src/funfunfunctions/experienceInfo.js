// this is how we will be storing the information that the user will input for their experience section of their resume

let expInfo = []

let expFactory = (jobTitle, dateWorked, company, area, bulletPoints = []) => {
    return {
        jobTitle,
        dateWorked,
        company,
        area,
        bullets : bulletPoints
    }
}

export {
    expInfo,
    expFactory
}