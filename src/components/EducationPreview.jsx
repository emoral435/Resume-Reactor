import React, {  Component } from 'react';
import { eduInfo } from '../funfunfunctions/educationInfo';
import LoadEducation from './LoadEducation';

export default class EducationPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let loadedArray = []

        for (let i = 0; i < eduInfo.length; i++) {
            loadedArray.push(<LoadEducation key={i + "education"} school={eduInfo[i].uni} location={eduInfo[i].location} degree={eduInfo[i].major} date={eduInfo[i].grad} />)
        }
        return (
            <div>
                {loadedArray}
            </div>
        )
    }
}