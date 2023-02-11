import React, { Component} from 'react';
import PreviewBtn from './PreviewBtn';
import EditBtn from './EditBtn';

class ETP extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className='relative flex font-[Ubuntu] max-w-min gap-4'>
                <EditBtn toggle={this.props.switch}/>
                <div className='rounded-full w-10 h-10 bg-[#455265] flex justify-center items-center text-2xl text-white absolute left-[50%] mt-[-20px] ml-[-20px] top-[50%] z-10 select-none'>Or</div>
                <PreviewBtn toggle={this.props.switch}/>
            </div>
        )
    }
}

export default ETP