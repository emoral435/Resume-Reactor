import Reaact, { Component } from 'react';

// work on making dynamic input fields that add to bulletArray in expeirence form,
// and make the function tied to the bullet point button
// white updating the state
// make sure to use datafields. I feel like that will be useull

class DynamicBP extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className='flex'><div>*</div><input autoComplete='off' type="text" placeholder='Type a bullet point here...' className='w-full outline-none' data-bullet-points/></li>
        )
    }
}

export default DynamicBP