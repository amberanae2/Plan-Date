import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='./images/couple2.jpg'/>
    <Card.Content>
      <Card.Header>Date</Card.Header>
      <Card.Meta>
        <span className='date'>Going to a concert</span>
      </Card.Meta>
      <Card.Description>Beyonce concert</Card.Description>
    </Card.Content>
  {/* </Card>

  <Card> */}
   <Image src='./images/couple2.jpg'/>
    <Card.Content>
      <Card.Header>Outing</Card.Header>
      <Card.Meta>
        <span className='date'>Going to a restaurant</span>
      </Card.Meta>
      <Card.Description>An event.</Card.Description>
    </Card.Content>
 {/* </Card>

<Card> */}
   <Image src='./images/couple2.jpg'/>
    <Card.Content>
      <Card.Header>Date</Card.Header>
      <Card.Meta>
        <span className='date'>Going to a concert</span>
      </Card.Meta>
      <Card.Description>An event.</Card.Description>
    </Card.Content>
</Card>

)

export default CardExampleCard
