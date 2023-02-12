import React, { Component } from "react";

export default class LoadEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="font-bold">{this.props.school}</div>
                    <div>{this.props.location}</div>
                </div>
                <div className="flex justify-between">
                    <div className="italic">{this.props.degree}</div>
                    <div className="italic">{this.props.date}</div>
                </div>
            </div>
        )
    }
}