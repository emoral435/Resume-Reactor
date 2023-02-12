import React, { Component } from 'react';
import EducationPreview from './EducationPreview';
import HeaderPreview from './HeaderPreview';
import ExperiencePreview from './ExperiencePreview';
import ProjectPreview from './ProjectPreview';
import TechnicalPreview from './TechPreview';

class PreviewResume extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='min-h-max min-w-max font-[CMUSerifRoman] flex flex-col gap-2 m-4'>
                <HeaderPreview />
                <div className='flex border-b-2 border-black font-bold my-2'>
                    <div className='text-[1.4rem]'>E</div>
                    <div className='text-[1rem] flex items-center'>DUCATION</div>
                </div>
                <EducationPreview />
                <div className='flex border-b-2 border-black font-bold my-2'>
                    <div className='text-[1.4rem]'>E</div>
                    <div className='text-[1rem] flex items-center'>XPERIENCE</div>
                </div>
                <ExperiencePreview />
                <div className='flex border-b-2 border-black font-bold my-2'>
                    <div className='text-[1.4rem]'>P</div>
                    <div className='text-[1rem] flex items-center'>ROJECTS</div>
                </div>
                <ProjectPreview />
                <div className='flex border-b-2 border-black font-bold my-2'>
                    <div className='text-[1.4rem]'>T</div>
                    <div className='text-[1rem] flex items-center'>ECHNICAL&nbsp;</div>
                    <div className='text-[1.4rem]'>S</div>
                    <div className='text-[1rem] flex items-center'>KILLS</div>
                </div>
                <TechnicalPreview />
            </div>
        )
    }
}

export default PreviewResume