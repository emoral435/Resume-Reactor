import React, { Component } from 'react';
import { techSkills } from '../funfunfunctions/techSkills';
import LoadTechSkills from './LoadTechSkills';

export default class TechnicalPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let loadedArray = []

        for (let i = 0; i < techSkills.length; i++) {
            if (!techSkills[i].skip) {
                loadedArray.push(<LoadTechSkills key={i + "technical skills"} skill={techSkills[i].skill} string={techSkills[i].string}/>)
            }
        }

        return (
            <div className='flex flex-col gap-4 mx-2'>
                {loadedArray}
            </div>
        )
    }
}