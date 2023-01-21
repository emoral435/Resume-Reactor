import React, { Component} from 'react'
import ETP from './components/EditToPreview'
import ResumePage from './components/ResumePage'

class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      // this is the main container spanning the entire document
      <main className="min-w-[100vh]">
        {/* this has the header part of the document, featuring the editing / preview sections as well as fancy SVG images */}
        <div className='flex justify-around items-center my-10'>
          <img src="/public/nuclear-svgrepo-com.svg" className='w-64 h-64'/>
          {/* here is where the edit / preview component should be located at */}
          <ETP />
          <img src="/public/nuclear-svgrepo-com.svg" className='w-64 h-64'/>
        </div>
        <ResumePage />
      </main>
    )
  }
}

export default App
