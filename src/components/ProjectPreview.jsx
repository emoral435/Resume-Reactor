import React, { Component } from 'react';
import { projectInfo } from '../funfunfunctions/projectInfo';
import LoadProject from './LoadProject';

export default class ProjectPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let loadedArray = []

        for (let i =0; i < projectInfo.length; i++) {
            loadedArray.push(<LoadProject key={i + "loaded project"} stack={projectInfo[i].stack} projectName={projectInfo[i].projectTitle} bullets={projectInfo[i].bullets}/>)
        }

        return (
            <div className='mx-4'>
                {loadedArray}
            </div>
        )
    }
}