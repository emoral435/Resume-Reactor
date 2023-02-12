import React, { Component } from "react";
import LoadBulletPoints from "./LoadBulletPoint";

export default class LoadExperience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let loadedBullets = []

        for (let i = 0; i < this.props.bullets.length; i++) {
            loadedBullets.push(<LoadBulletPoints bullet={this.props.bullets[i]} key={i + "exp bullet"}/>)
        }

        return (
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="font-bold">{this.props.job}</div>
                    <div>{this.props.date}</div>
                </div>
                <div className="flex justify-between">
                    <div className="italic">{this.props.company}</div>
                    <div className="italic">{this.props.location}</div>
                </div>
                <div className="mx-4">
                    {loadedBullets}
                </div>
            </div>
        )
    }
}