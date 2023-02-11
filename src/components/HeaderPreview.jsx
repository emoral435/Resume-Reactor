import React, { Component } from 'react';
import { headerInfo } from '../funfunfunctions/headerInfo';
import { projectInfo } from '../funfunfunctions/projectInfo';

class HeaderPreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let linkArray = []
        for (let i = 0; i < headerInfo[1].linkArray.length; i++) {
            if (headerInfo[1].linkArray[i] != "") {
                linkArray.push(<div key={i + "link"} >{headerInfo[1].linkArray[i]}</div>)
                if (i < headerInfo[1].linkArray.length - 1) {
                    linkArray.push(<div key={i + "divider"}> | </div>)
                }
            }
        }

        return (
            <div className='w-full flex flex-col gap-2 mt-4'> {/* this will contian the name divs, then the links*/}
                <div className='w-full flex justify-center gap-4 text-7xl'> {/* name div */}
                    <div>{headerInfo[0].first}</div>
                    <div>{headerInfo[0].last}</div>
                </div>
                <div className='w-full flex justify-center gap-4'> {/* this will contain the links */}
                    {linkArray}
                </div>
            </div>
        )
    }
}
export default HeaderPreview