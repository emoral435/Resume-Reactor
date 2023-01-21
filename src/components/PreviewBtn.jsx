import React, { Component } from 'react';
import toggle from '../funfunfunctions/toggleEPColor';

class PreviewBtn extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <button className={'text-3xl bg-[#ffaa00] hover:bg-[#ff8500] w-[12rem] h-[3.5rem] rounded-tr-[10px] rounded-br-[10px]'} id="preview-btn">
                <div className='w-[12rem] h-[3.5rem] flex justify-center items-center' onClick={toggle}>PREVIEW</div>
            </button>
        )
    }
}

export default PreviewBtn