import React, { Component } from 'react'
// import axios from 'axios'
// import { Button, Checkbox, Form, Modal } from 'semantic-ui-react'

// class LogIn extends Component {
//   state = { open: false }

//   show = size => () => this.setState({ size, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, size } = this.state

//     return (
//       <div>
//         <Button onClick={this.show('mini')}>Log in</Button>
//         <Modal size={size} open={open} onClose={this.close}>
//           <Modal.Header>Log in</Modal.Header>
//           <Modal.Content>

//   <Form>
//     <Form.Field>
//       <label>Username</label>
//       <input placeholder='Username' />
//     </Form.Field>
//     <Form.Field>
//       <label>Password</label>
//       <input placeholder='Password' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
//           </Modal.Content>
//           <Modal.Actions>
            
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }




import { Button, Header, Icon, Modal } from 'semantic-ui-react'

 class LogIn extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Log In</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content>
          <h1>Welcome Back!</h1>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> All Signed In!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

 export default LogIn;