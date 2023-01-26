import React, { Component } from 'react';

class AddSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let id = this.props.id
        return (
            <button className='bg-[#455265] hover:bg-[#1e2530] text-white text-xl rounded-lg px-6 py-3' type={this.props.type} onClick={this.props.add} id={this.props.id}>
                {this.props.text}
            </button>
        )
    }
}

export default AddSection