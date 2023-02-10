let projectInfo = []

let projectFactory = (projectTitle, stack, bulletPoints) => {
    return {
        projectTitle,
        stack,
        bullets : bulletPoints
    }
}

export {
    projectInfo,
    projectFactory
}