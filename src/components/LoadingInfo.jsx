import React, {Component} from 'react';

class LoadingInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'text-3xl font-[CMUSerifRoman] rounded-lg bg-[#ffaa00] hover:bg-[#ff8500] py-4 px-8 flex justify-between my-2 select-none ' + this.props.hide} data-position={this.props.dataPosition} id={this.props.id}>
                <div>{this.props.text}</div>
                <div onClick={this.props.deleteInfo}>&#x2715;</div>
            </div>
        )
    }
}

export default LoadingInfo