import React, { Component } from 'react';
import { expInfo } from '../funfunfunctions/experienceInfo';
import LoadExperience from './LoadExperience';

export default class ExperiencePreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let loadedArray = []
        
        for (let i = 0; i < expInfo.length; i++) {
            loadedArray.push(<LoadExperience job={expInfo[i].jobTitle} date={expInfo[i].dateWorked} company={expInfo[i].company} location={expInfo[i].area} bullets={expInfo[i].bullets}/>)
        }

        return (
            <div>
                {loadedArray}
            </div>
        )
    }
}