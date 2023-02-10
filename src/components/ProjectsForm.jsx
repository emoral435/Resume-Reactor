import React, { Component } from "react";
import DynamicBP from "./DynamicExperiencePts";
import BulletPoint from "./BulletPoint";
import CancelButton from "./CancelButton";
import AddSection from "./addSection";
import CancelPro from "../funfunfunctions/CancelProjects";

class ProjectForm extends Component {
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
                <form action="" className='w-full h-full hidden' id='proForm'>
                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                            <div><label className="max-w-min" htmlFor="project-title">Project Title</label></div>
                            <input className='outline-none' type="text" id="project-title" placeholder="Gitlytics..."/>
                        </div>
                        <div>|</div>
                        <div className='flex flex-col'>
                            <div className="flex"><label htmlFor="stack-used">Stack Used</label></div>
                            <input className="text-right outline-none" type="text" id="stack-used" placeholder="Python, Flask, React, PostgreSQL, Docker..."/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div>Bullet Points</div>
                        <ul className='ml-10 flex flex-col gap-2' id='bullet-points-project'>
                            {bulletArray}
                        </ul>
                        <BulletPoint add={addBP}/>
                    </div>
                    <div className='my-2 flex gap-4'>
                        <CancelButton cancel={CancelPro}/>
                        <AddSection text="+ Submit" type="button" add={this.props.submit}/>
                    </div>
                </form>
        )
    }
}
export default ProjectForm