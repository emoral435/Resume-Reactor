import React, { Component } from 'react';

class AddSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className='bg-[#455265] hover:bg-[#1e2530] text-white text-xl rounded-lg px-6 py-3' onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default AddSection