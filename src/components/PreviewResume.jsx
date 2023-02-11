import React, { Component } from 'react';
import EducationPreview from './EducationPreview';
import HeaderPreview from './HeaderPreview';

class PreviewResume extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='min-h-max min-w-max font-[CMUSerifRoman] flex flex-col gap-2 m-4'>
                <HeaderPreview />
                <div className='text-3xl border-b-2 border-black'>Education</div>
                <EducationPreview />
                <div className='text-3xl border-b-2 border-black'>Experience</div>
                <div className='text-3xl border-b-2 border-black'>Projects</div>
                <div className='text-3xl border-b-2 border-black'>Technical Skills</div>
            </div>
        )
    }
}

export default PreviewResume