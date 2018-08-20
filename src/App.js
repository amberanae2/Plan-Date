import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import Modal from './components/Modal'
//  import BackgroundSlider from './components/backgroundSlider/backgroundSlider';
 import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import CardExampleCard from './components/Card/Card';

import DropdownExampleSimple from './components/Dropdown/dropdown';
// import Search from './components/Search/Search';
// import Form from './components/Form/Form';
 import './components/dist/semantic.min.css';


const HomepageHeading = ({ mobile }) => (
  <Container>
    <div class = "ui inverted vertical masthead center aligned segment"></div>
    <Header
      as='h1'
      content='Plan-A-Date'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
      
    />
 
    <Header
      as='h2'
      content='Let Us Help You Plan Your Date Today!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
       <Modal/>
    {/* <Button primary size='huge'>
      Get Started!
      <Icon name='right arrow' />
    </Button> */}
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}
  
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              secondary={!fixed}
              position='right'
              size='large'
            >
              <Container>
                {/* <Menu.Item as='a' active>
                  Home
                </Menu.Item> */}
                <Menu.Item position='right'>
                  <LogIn as='LogIn' inverted={!fixed}/>
                  <div class="ui language floating dropdown link item" id="languages" tabindex="0">
          <i class="world icon"></i>
          <div class="text">English</div>
          <div class="menu" tabindex="-1">
</div>
        </div>
                  {/* <SignUp as='SignUp' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}/> */}
                </Menu.Item>
                {/* <Dropdown.Menu>
                  <DropdownExampleSimple></DropdownExampleSimple>
                </Dropdown.Menu> */}
                {/* <Menu.Item position='center' text='Dropdown'>
                  <DropdownExampleSimple as='a' inverted={!fixed}>
                    Dropdown
                  </DropdownExampleSimple> */}
                  {/* <Form></Form> */}
                  {/* <Search></Search> */}
{/*                   
                </Menu.Item>  */}
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  render() {
    const { children } = this.props
    
    return (
      <Responsive {...Responsive.onlyMobile}>
        
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted >
                      Log in
                    </Button>
                    {/* <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button> */}
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
         
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  
  <ResponsiveContainer>
    
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>

              Lets Get Started On Your Search!
              <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
            </Header>

           {/* <Search/> */}
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            {/* <Image bordered rounded size='large' src='/images/wireframe/white-image.png' /> */}
            <CardExampleCard/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          
            {/* <Carousel/> */}

          </Grid.Column>
        </Grid.Row>
      </Grid> 
      </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>

     </Segment> 
     <Segment inverted vertical style={{ padding: '5em 0em' }}> 

      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted> 
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
