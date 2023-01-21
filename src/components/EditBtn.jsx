import React, { Component } from 'react';
import toggle from '../funfunfunctions/toggleEPColor';

class EditBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className={'text-3xl bg-[#ff8500] hover:bg-[#ff8500] w-[12rem] h-[3.5rem] rounded-tl-[10px] rounded-bl-[10px]'} id="edit-btn">
                <div className='w-[12rem] h-[3.5rem] flex justify-center items-center' onClick={toggle}>EDIT</div>
            </button>
        )
    }
}

export default EditBtn