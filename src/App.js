import React from 'react'

import BirthdayMessage from './components/BirthdayMessage'
import BirthdayData from './data/BirthdayData'
class App extends React.Component {
  componentWillMount() {
    document.body.style.background = BirthdayData.color

  }
  
  render() {
    return (
      <div className='App'>
        <BirthdayMessage birthdayData={BirthdayData}/>
    
        <app/>
      </div>
    )
  }
}

export default App