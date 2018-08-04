import React, { Component } from 'react'
import { Button, Checkbox, Form, Modal } from 'semantic-ui-react'

class LogIn extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}>Log in</Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Log in</Modal.Header>
          <Modal.Content>

  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
          </Modal.Content>
          <Modal.Actions>
            
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default LogIn;