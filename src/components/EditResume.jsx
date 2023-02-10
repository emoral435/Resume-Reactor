import React, {  Component } from 'react';
import NameInput from './NameInput';
import LinkInput from './LinkInputs';
import AddSection from './addSection';
import EducationForm from './EducationForm';
import { eduInfo, eduFactory } from '../funfunfunctions/educationInfo';
import LoadingInfo from './LoadingInfo';
import TechForm from './TechForm';
import ExperienceForm from './experienceForm';
import Popup from '../funfunfunctions/FormPopup';
import { expFactory, expInfo } from '../funfunfunctions/experienceInfo';
import CancelExp from '../funfunfunctions/CancelExp';
import addFN from '../funfunfunctions/hideEduAdd';
import ProjectForm from './ProjectsForm';
import { projectFactory, projectInfo } from '../funfunfunctions/projectInfo';
import CancelPro from '../funfunfunctions/CancelProjects';
import { techSkills, techFactory } from '../funfunfunctions/techSkills';
class EditResume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numEdu : eduInfo.length,
            numExp: expInfo.length,
            numPro: projectInfo.length,
            numSkills : techSkills.length / 4
        }
    }

    render() {

        let deleteEduInfo = (e) => {
            let target = e.target.parentNode
            eduInfo.splice(target.dataset.position, 1)
            this.setState({
                numEdu: this.state.numEdu - 1,
                numExp: this.state.numExp,
                numPro: this.state.numPro,
                numSkills: this.state.numSkills
            })
        }
        
        let deleteExpInfo = (e) => {
            let target = e.target.parentNode
            expInfo.splice(parseInt(target.dataset.position), 1)
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp - 1,
                numPro: this.state.numPro,
                numSkills: this.state.numSkills
            })
        }
        
        let deleteProInfo = (e) => {
            let target = e.target.parentNode
            projectInfo.splice(parseInt(target.dataset.position), 1)
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp,
                numPro: this.state.numPro - 1,
                numSkills: this.state.numSkills
            })
        }

        let deleteTech = () => {
            techSkills.splice(0, techSkills.length)
            let loadedTech = document.getElementById('loaded-tech-skills')
            loadedTech.classList.add('hidden')
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp,
                numPro: this.state.numPro,
                numSkills: this.state.numSkills - 1
            })
        }
        
        const expArray = []
        const eduArray = []
        const proArray = []
        const techArray = []
        
        for (let i = 0; i < this.state.numEdu; i++) {
            eduArray.push(<LoadingInfo deleteInfo={deleteEduInfo} text={eduInfo[i].uni} dataPosition={i} key={i} number={i} />)
        }
        
        for (let i = 0; i < this.state.numExp; i++) {
            expArray.push(<LoadingInfo deleteInfo={deleteExpInfo} text={expInfo[i].jobTitle} dataPosition={i} key={i} />)
        }
        
        for (let i = 0; i < this.state.numPro; i++) {
            proArray.push(<LoadingInfo deleteInfo={deleteProInfo} text={projectInfo[i].projectTitle} dataPosition={i} key={i} />)
        }
        
        for (let i = 0; i < this.state.numSkills; i++) {
            techArray.push(<LoadingInfo text='Tech Skills' id='loaded-tech-skills' deleteInfo={deleteTech} key={i}/>)
        }
        
        let submitTech = () => {
            const lang = document.getElementById('languages')
            const frameworks = document.getElementById('frameworks')
            const tools = document.getElementById('developer-tools')
            const libraries = document.getElementById('libraries')
            const loopArray = [lang, frameworks, tools, libraries]
            for (let i = 0; i < loopArray.length; i++) {
                techSkills[i] = techFactory(loopArray[i].id, loopArray[i].value)
                loopArray[i].value = ''
            }
            let techForm = document.getElementById('techForm')
            techForm.classList.add('hidden')
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp,
                numPro: this.state.numPro,
                numSkills: this.state.numSkills + 1
            })
        }
        
        let submitEdu = () => {
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
                    numEdu: this.state.numEdu,
                    numExp: this.state.numExp,
                    numPro: this.state.numPro,
                    numSkills: this.state.numSkills + 1
                })
            }
        }

        let submitExp = () => {
            const bulletValues = []
            document.querySelectorAll('[data-bullet-points]').forEach ( node => {
                bulletValues.push(node.value)
            })
            expInfo.push(expFactory(document.getElementById('job-title').value, document.getElementById('date-worked').value, document.getElementById('company').value, document.getElementById('location-experience').value, bulletValues))
            CancelExp()
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp + 1,
                numPro: this.state.numPro,
                numSkills: this.state.numSkills
            })
        }

        let submitPro = () => {
            console.log('hahaha')
            const bulletValues = []
            document.querySelectorAll('[data-bullet-points]').forEach ( node => {
                bulletValues.push(node.value)
            })
            projectInfo.push(projectFactory(document.getElementById('project-title').value, document.getElementById('stack-used').value, document.getElementById('company').value, bulletValues))
            CancelPro()
            this.setState({
                numEdu: this.state.numEdu,
                numExp: this.state.numExp,
                numPro: this.state.numPro + 1,
                numSkills: this.state.numSkills
            })
        }

        const renderTech = () => {
            if (this.state.numSkills === 0) {
                return <AddSection type="button" text="+ Technical Skill" add={() => Popup('addTech', 'techForm')} id='addTech'/>
            } else return <div></div>
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
                                <div>
                                    {expArray}
                                </div>
                                <ExperienceForm submit={submitExp}/>
                                <AddSection text="+ Experience" id="addExp" add={() => Popup('addExp', 'expForm')}/>
                            </div>

                            {/* this is the project section for the page */}
                            <div className="flex flex-col" id='projects'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>P</div>
                                    <div className='text-[1rem] flex items-center'>ROJECTS</div>
                                </div>
                                <div>
                                    {proArray}
                                </div>
                                <ProjectForm submit={submitPro}/>
                                <AddSection text="+ Projects" id="addProjects" add={() => Popup('addProjects', 'proForm')} />
                            </div>

                            {/* this is the techinical skills of the resume */}
                            <div className="flex flex-col" id='tech-skills'>
                                <div className='flex border-b-2 border-black font-bold my-2'>
                                    <div className='text-[1.4rem]'>T</div>
                                    <div className='text-[1rem] flex items-center'>ECHNICAL&nbsp;</div>
                                    <div className='text-[1.4rem]'>S</div>
                                    <div className='text-[1rem] flex items-center'>KILLS</div>
                                </div>
                                <div>
                                    {techArray}
                                </div>
                                <TechForm submitTech={submitTech} key={0}/>
                                {renderTech()}
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default EditResume