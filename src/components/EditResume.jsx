import React, {  Component } from 'react';
import NameInput from './NameInput';
import LinkInput from './LinkInputs';
import AddSection from './addSection';
import EducationForm from './EducationForm';
import { eduInfo, eduFactory } from '../funfunfunctions/educationInfo';
import LoadingInfo from './LoadingInfo';
import TechForm from './TechForm';
import submitTech from '../funfunfunctions/submitTech';
import deleteTech from '../funfunfunctions/deleteTech';
import ExperienceForm from './experienceForm';
import Popup from '../funfunfunctions/FormPopup';
class EditResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numEdu : eduInfo.length
        }
    }

    render() {
        let deleteEduInfo = (e) => {
            let target = e.target.parentNode
            eduInfo.splice(target.dataset.schools, 1)
            this.setState({
                numEdu: this.state.numEdu - 1
            })
        }
        const eduArray = []
        
        for (let i = 0; i < this.state.numEdu; i++) {
            eduArray.push(<LoadingInfo deleteInfo={deleteEduInfo} text={eduInfo[i].uni} dataSchools={i} key={i} number={i} />)
        }



        
        let addFN = () => {
            let education = document.getElementById('addEducation')
            education.classList.add('hidden')
            let form = document.getElementById('eduForm')
            form.classList.remove('hidden')
        }
        
        let submitEdu = () => {
            console.log('what')
            let uni = document.getElementById('eduSchool')
            let grad = document.getElementById('eduGrad')
            let location = document.getElementById('eduLocation')
            let major = document.getElementById('eduMajor')
            if (uni.value != "" && grad.value != "" && location.value != "" && major.value != ''){
                let education = document.getElementById('addEducation')
                education.classList.remove('hidden')
                eduInfo.push(eduFactory(uni.value, location.value, major.value, grad.value))
                uni.value =''
                location.value = ''
                major.value = ''
                grad.value = ''
                let form = document.getElementById('eduForm')
                form.classList.add('hidden')
                this.setState({
                    numEdu: this.state.numEdu + 1
                })
            }
        }

        return (
            <div className='h-full w-full'>
                    {/* this area will contain the header part of the resume */}
                    <div className="flex gap-2 justify-center font-[CMUSerifRoman] mt-2">
                        <NameInput nameValue={this.props.firstName} placeholder="Jake..." height="max-h-min" id="first-name" text="text-7xl" />
                        <NameInput nameValue={this.props.lastName} placeholder="Ryan..." height="max-h-min" id="last-time" text="text-7xl" />
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
                            <div className="flex flex-col transition ease-in-out" id='education'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>E</div>
                                    <div className='text-[1rem] flex items-center'>DUCATION</div>
                                </div>
                                <div>
                                    {eduArray}
                                </div>
                                <EducationForm addEduInfo={submitEdu}/>
                                <AddSection text="+ Education" add={addFN} id="addEducation"/>
                            </div>

                            {/* this is the experience section for the page */}
                            <div className="flex flex-col" id='experience'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>E</div>
                                    <div className='text-[1rem] flex items-center'>XPERIENCE</div>
                                </div>
                                <ExperienceForm />
                                <AddSection text="+ Experience" id="addExp" add={() => Popup('addExp', 'expForm')}/>
                            </div>

                            {/* this is the project section for the page */}
                            <div className="flex flex-col" id='projects'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>P</div>
                                    <div className='text-[1rem] flex items-center'>ROJECTS</div>
                                </div>
                                <AddSection text="+ Projects" />
                            </div>

                            {/* this is the techinical skills of the resume */}
                            <div className="flex flex-col" id='tech-skills'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>T</div>
                                    <div className='text-[1rem] flex items-center'>ECHNICAL&nbsp;</div>
                                    <div className='text-[1.4rem]'>S</div>
                                    <div className='text-[1rem] flex items-center'>KILLS</div>
                                </div>
                                <LoadingInfo text='Tech Skills' hide='hidden' id='loaded-tech-skills' deleteInfo={deleteTech}/>
                                <TechForm submitTech={submitTech}/>
                                <AddSection type="button" text="+ Technical Skill" add={() => Popup('addTech', 'techForm')} id='addTech'/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default EditResume