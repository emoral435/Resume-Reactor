const techSkills = []

let techFactory = (skill, string) => {
    let skip = (string == '') ? true : false;
    return {
        skip,
        skill,
        string
    }
}

export {
    techSkills,
    techFactory
}