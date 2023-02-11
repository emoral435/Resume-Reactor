import React, { Component } from 'react';

export default class LoadBulletPoints extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=''>&#8226; {this.props.bullet}</div>
        )
    }
}