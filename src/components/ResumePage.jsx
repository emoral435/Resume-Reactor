import React, {Component} from 'react';
import NameInput from './NameInput';
import LinkInput from './LinkInputs';
import AddSection from './addSection';


class ResumePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className='flex h-full justify-center'>
                <div className='basis-3/6 min-h-[74vh] bg-white border-[10px] border-stone-300 border-double'>

                    {/* this area will contain the header part of the resume */}
                    <div className="flex gap-2 justify-center font-[CMUSerifRoman] mt-2">
                        <NameInput placeholder="Jake..." height="max-h-min" id="first-name" text="text-7xl" />
                        <NameInput placeholder="Ryan..." height="max-h-min" id="last-time" text="text-7xl" />
                    </div>

                    {/* this area has the link inputs */}
                    <div className='flex font-[CMUSerifRoman] justify-around my-2'>
                        <LinkInput placeholder="phone #..." id="phone-num"/>
                        <div>|</div>
                        <LinkInput placeholder="email..." id="email"/>
                        <div>|</div>
                        <LinkInput placeholder="LinkedIn..." id="linkedin"/>
                        <div>|</div>
                        <LinkInput placeholder="github..." id="github"/>
                        <div>|</div>
                        <LinkInput placeholder="website..." id="wesbite-url"/>
                    </div>

                    <div className="font-[CMUSerifRoman] w-full flex justify-center">
                        <div className="w-[90%]">

                            {/* this is the education section for the resume */}
                            <div className="flex border-b-2 border-black font-bold relative">
                                <div className='text-[1.4rem]'>E</div>
                                <div className='text-[1rem] flex items-center'>DUCATION</div>
                            </div>
                            <div className='my-2'>
                                <AddSection text="+ Education" />
                            </div>

                            {/* this is the experience section for the page */}
                            <div className="flex border-b-2 border-black font-bold relative">
                                <div className='text-[1.4rem]'>E</div>
                                <div className='text-[1rem] flex items-center'>XPERIENCE</div>
                            </div>
                            <div className='my-2'>
                                <AddSection text="+ Experience" />
                            </div>

                            {/* this is the project section for the page */}
                            <div className="flex border-b-2 border-black font-bold relative">
                                <div className='text-[1.4rem]'>P</div>
                                <div className='text-[1rem] flex items-center'>ROJECTS</div>
                            </div>
                            <div className='my-2'>
                                <AddSection text="+ Projects" />
                            </div>

                            {/* this is the techinical skills of the resume */}
                            <div className="flex border-b-2 border-black font-bold relative">
                                <div className='text-[1.4rem]'>T</div>
                                <div className='text-[1rem] flex items-center'>ECHNICAL&nbsp;</div>
                                <div className='text-[1.4rem]'>S</div>
                                <div className='text-[1rem] flex items-center'>KILLS</div>
                            </div>
                            <div className='my-2'>
                                <AddSection text="+ Technical Skill" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ResumePage