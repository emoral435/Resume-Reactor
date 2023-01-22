import React, { Component } from 'react';

class CancelButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let id = this.props.id

        return (
            <button className='bg-[#d64937] hover:bg-[#b73f2f] text-white text-xl rounded-lg px-6 py-3' type="button" onClick={this.props.cancel}>
                Cancel
            </button>
        )
    }
}

export default CancelButton