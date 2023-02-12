import React, { Component } from 'react';
import LoadBulletPoints from './LoadBulletPoint';

export default class LoadProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let loadedBullets = []

        for (let i = 0; i < this.props.bullets.length; i++) {
            loadedBullets.push(<LoadBulletPoints bullet={this.props.bullets[i]} key={i + "project bullet"}/>)
        }

        return (
            <div className="flex flex-col">
                <div className="flex gap-2">
                    <div className='font-bold'>{this.props.projectName}</div>
                    <div> | </div>
                    <div className='italic'>{this.props.stack}</div>
                </div>
                <div className='mx-4'>
                    {loadedBullets}
                </div>
            </div>
        )
    }
}