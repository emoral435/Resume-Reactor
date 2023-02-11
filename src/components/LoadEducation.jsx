import React, { Component } from "react";

export default class LoadEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div>{this.props.school}</div>
                    <div>{this.props.location}</div>
                </div>
                <div className="flex justify-between">
                    <div>{this.props.degree}</div>
                    <div>{this.props.date}</div>
                </div>
            </div>
        )
    }
}