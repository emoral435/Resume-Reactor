import React, { Component } from 'react';

// this component is where we will create most if not all of our input fields, that will accept User Information. It will have to
class LinkInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let onChange = () => {
            let input = document.getElementById(this.props.id)
            input.addEventListener("input", resizeInput)
            resizeInput.call(input)

        }

        function resizeInput() {
            if (this.value.length == 0) {
                this.style.width = "8rem";
            }
            else {
                this.style.width = (this.value.length + 1) + "ch";
            }
          }
        return (
            <input type="text" className={'outline-none w-32 ' + this.props.height + " " + this.props.text} autoComplete="off" id={this.props.id} placeholder={this.props.placeholder} data-name onChange={onChange}/>
        )
    }
}

export default LinkInput