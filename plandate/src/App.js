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
// import BackgroundSlide from './components/backgroundSlider/backgroundSlider';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

import DropdownExampleSimple from './components/Dropdown/dropdown';
// import Search from './components/Search/Search';
// import Form from './components/Form/Form';

const HomepageHeading = ({ mobile }) => (
  <Container text>
  {/* <BackgroundSlide /> */}
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

    <Button primary size='huge'>
      Search
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                {/* <Menu.Item position='right'>
                  <LogIn as='LogIn' inverted={!fixed}/>
                  <SignUp as='SignUp' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}/>
                </Menu.Item> */}
                {/* <Dropdown.Menu>
                  <DropdownExampleSimple></DropdownExampleSimple>
                </Dropdown.Menu> */}
                <Menu.Item position='right' text='Dropdown'>
                  <DropdownExampleSimple as='a' inverted={!fixed}>
                    Dropdown
                  </DropdownExampleSimple>
                  {/* <SearchExampleStandard as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Enter a City
                  </SearchExampleStandard>  */}
                  {/* <Form></Form> */}
                  
                </Menu.Item> 
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

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

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
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
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
  
            </Header>
           {/* <Search/> */}
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            {/* <Image bordered rounded size='large' src='/images/wireframe/white-image.png' /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          
            <Carousel/>

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
