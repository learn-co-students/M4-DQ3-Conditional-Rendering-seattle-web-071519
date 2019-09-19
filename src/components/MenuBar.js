import React from 'react'

const MenuBar = (props) => {



  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  
  let activePages = {
    profile: '',
    photo: '',
    cocktail: '',
    pokemon: ''
  }

  activePages[props.selected] = 'active'




  return (
    <div className="ui four item menu">
      <a className={`item ` + activePages['profile']} id="profile" onClick={props.selectButton} >
        <i className="user large icon" id="profile"/>
      </a>

      <a className={`item ` + activePages['photo']} id="photo"  onClick={props.selectButton} >
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={`item ` + activePages['cocktail']} id="cocktail"  onClick={props.selectButton} >
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={`item ` + activePages['pokemon']} id="pokemon"  onClick={props.selectButton} > 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
