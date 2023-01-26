import React, { Component } from 'react';

class BulletPoint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className='text-white bg-[#1aa260] hover:bg-[#1aa260] rounded-lg py-2 px-3 max-w-min my-4' type="button" onClick={this.props.add} id={this.props.id}>
                +
            </button>
        )
    }
}

export default BulletPoint