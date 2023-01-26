import React, {Component} from 'react';

class LoadingEduInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='text-3xl font-[CMUSerifRoman] rounded-lg bg-[#ffaa00] hover:bg-[#ff8500] py-4 px-8 flex justify-between my-2 select-none' data-schools={this.props.dataSchools}>
                <div>{this.props.text}</div>
                <div onClick={this.props.deleteEduInfo}>&#x2715;</div>
            </div>
        )
    }
}

export default LoadingEduInfo