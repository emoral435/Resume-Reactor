import React, { Component } from 'react';
import CancelButton from './CancelButton'; 
import AddSection from './addSection';
import CancelTech from '../funfunfunctions/CancelTech';

class TechForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <form action="" className='w-full h-full hidden' id='techForm'>
                <div className='flex'>
                    <label className='mr-2' htmlFor="languages">Languages:</label>
                    <input className='outline-none' autoComplete='off' type="text" id="languages" placeholder='Javascript, C++, Python...'/>
                </div>
                <div className='flex'>
                    <label className='mr-2' htmlFor="frameworks">Frameworks:</label>
                    <input className='outline-none' autoComplete='off' type="text" id="frameworks" placeholder='TailwindCSS, React, Flask, Node.js...'/>
                </div>
                <div className='flex'>
                    <label className='mr-2' htmlFor="developer-tools">Developer Tools:</label>
                    <input className='outline-none' autoComplete='off' type="text" id="developer-tools" placeholder='Git, Docker, AWS, Google Cloud Platform...'/>
                </div>
                <div className='flex'>
                    <label className='mr-2' htmlFor="libraries">Libraries:</label>
                    <input className='outline-none' autoComplete='off' type="text" id="libraries" placeholder='Date-FNS, NumPy, Matplotlib, pandas'/>
                </div>
                <div className='my-2 flex gap-4'>
                    <CancelButton cancel={CancelTech}/>
                    <AddSection text="+ Submit" type="button" add={this.props.submitTech}/>
                </div>
            </form>
        )
    }

}

export default TechForm