import React from 'react'
import { Menu, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TopMenu extends React.Component{
  state = {activeItem: 'home'}
  handleItemClick= (e, {name}) => {
    this.setState({activeItem: name.toLowerCase()})
  }
  
  render(){
    const { activeItem } = this.state

    return(
      <React.Fragment>
        <Menu secondary>
          <Menu.Item as='a' header>
            <Image  size='small' src='/logo-sm-c.png' />
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              link={ true }
              as={ Link }
              name='Home'
              to='/'
              color={'blue'}
              active={ activeItem === 'home' }
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Login'
              as={ Link }
              to='signin'
              color={'blue'}
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Signup'
              color={'blue'}
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
      </Menu>
      <Divider />
    </React.Fragment>
      )
  }
}

export default TopMenu;