import React, { Component } from 'react';

export default class LoadTechSkills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='flex gap-2'>
                    <div className='font-bold'>{this.props.skill}: </div>
                    <div>{this.props.string}</div>
                </div>
        )
    }
}