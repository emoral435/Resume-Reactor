import React, { Component } from 'react';
import CancelButton from './CancelButton';
import AddSection from './addSection';
import CancelEdu from '../funfunfunctions/CancelEdu';

class EducationForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <form action="" className='w-full h-full hidden' id={'eduForm'}>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor={'eduSchool'}>University / School</label>
                        <input type="text" id={'eduSchool'} className='outline-none w-52' placeholder='University of Illinois Chicago...' autoComplete='off' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor={'eduLocation'}>Location</label>
                        <input type="text" id={'eduLocation'} className='outline-none w-16' placeholder='Chicago...' autoComplete='off' required/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor={'eduMajor'}>Major Description</label>
                        <input type="text" id={'eduMajor'} className='outline-none w-64' placeholder='Bachelor of Arts in Computer Science...' autoComplete='off' required/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor={'eduGrad'}>Graduation Date / Graduated</label>
                        <div className='flex justify-end'><input type="text" id={'eduGrad'} className='outline-none w-40' placeholder='Aug 2020 - May 2024...' autoComplete='off' required/></div>
                    </div>
                </div>
                <div className='my-2 flex gap-4'>
                    <CancelButton cancel={CancelEdu}/>
                    <AddSection text="+ Submit" typ="button" add={this.props.addEduInfo}/>
                </div>
            </form>
        )
    }
}

export default EducationForm