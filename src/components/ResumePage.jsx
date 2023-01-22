import React, {Component} from 'react';
import EditResume from './EditResume';

class ResumePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className='flex h-full justify-center'>
                <div className='basis-3/6 min-h-[74vh] bg-white border-[10px] border-stone-300 border-double'>
                    <EditResume />
                </div>
            </div>
        )
    }
}

export default ResumePage