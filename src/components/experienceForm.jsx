import React, { Component } from 'react';
import AddSection from './addSection';
import CancelButton from './CancelButton';
import BulletPoint from './BulletPoint';
import DynamicBP from './DynamicExperiencePts';
import CancelExp from '../funfunfunctions/CancelExp';
class ExperienceForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numBullets: 0
        }
    }
    render() {
        const bulletArray = []

        for (let i = 0; i < this.state.numBullets; i++) {
            bulletArray.push(<DynamicBP key={i}/>)
        }

        let addBP = () => {
            this.setState({numBullets: this.state.numBullets + 1})
        }

        return (
            <form action="" className='w-full h-full hidden' id='expForm'>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor="job-title">Job Title</label>
                        <input className='outline-none' type="text" id="job-title" placeholder="Data Analytics Engineer..."/>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex justify-end"><label htmlFor="date-worked">Date Worked</label></div>
                        <input className="text-right outline-none" type="text" id="date-worked" placeholder="May 2022 - August 2022..."/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <label htmlFor="company">Company</label>
                        <input className='outline-none' type="text" id="company" placeholder="Microsoft..."/>
                    </div>
                    <div className='flex flex-col'>
                        <div className="flex justify-end"><label htmlFor="location-experience">Location</label></div>
                        <input className="text-right outline-none" type="text" id="location-experience" placeholder="Redmond, WA..."/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div>Bullet Points</div>
                    <ul className='ml-10 flex flex-col gap-2' id='bullet-points'>
                        {bulletArray}
                    </ul>
                    <BulletPoint add={addBP}/>
                </div>
                <div className='my-2 flex gap-4'>
                    <CancelButton cancel={CancelExp}/>
                    <AddSection text="+ Submit" type="button" add={this.props.submit}/>
                </div>
            </form>
        )
    }
}

export default ExperienceForm