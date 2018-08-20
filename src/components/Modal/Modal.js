import React, { Component } from 'react'
import { Button, Form, Icon, Modal } from 'semantic-ui-react'

class NestedModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header></Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const ModalExampleMultiple = () => (
  <Modal trigger={<Button>Get Started</Button>}>
    <Modal.Header>Lets Get To Know You!</Modal.Header>
    <Modal.Content image>
     <Form>
       <h3>Choose An Answer That Best Suits You.</h3>
     <Form.Group grouped>
      <Form.Field label='You enjoy concerts' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='You enjoy museums' control='input' type='radio' name='htmlRadios' />
      <br/>
    </Form.Group>
    <Form.Group grouped>
      <Form.Field label='You enjoy concerts' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='You enjoy museums' control='input' type='radio' name='htmlRadios' />
      <br/>
    </Form.Group>
    <Form.Group grouped>
      <Form.Field label='You enjoy concerts' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='You enjoy museums' control='input' type='radio' name='htmlRadios' />
      <br/>
    </Form.Group>
    <Form.Group grouped>
      <Form.Field label='You enjoy concerts' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='You enjoy museums' control='input' type='radio' name='htmlRadios' />
      <br/>
    </Form.Group>
    <Form.Group grouped>
      <Form.Field label='You enjoy concerts' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='You enjoy museums' control='input' type='radio' name='htmlRadios' />
      <br/>
    </Form.Group>
     </Form>
      <Modal.Description>

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal />
    </Modal.Actions>
  </Modal>
)

export default ModalExampleMultiple

