import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      selected: 'profile'
    }
  }

  selectButton = (event) => {
    this.setState({
      selected: event.target.id
    })
    console.log('hitting selectButton')
  }

  render() {


    let detailsToDisplay;

    switch(this.state.selected){
      case 'profile':
        detailsToDisplay = Profile()
        break;
      case 'photo':
        detailsToDisplay = Photos()
        break;
      case 'cocktail':
        detailsToDisplay = Cocktails()
        break;
      case 'pokemon':
        detailsToDisplay = <Pokemon />
        break;
    }

    return (
      <div>
        <MenuBar selectButton={this.selectButton} selected={this.state.selected} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
