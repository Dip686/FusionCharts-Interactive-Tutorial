import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.'
].join(' ')

const StepDetails = () => (
  <Card fluid>
    <Card.Content header='Add Scripts' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon style={{'float':'left'}} size='large' name='arrow alternate circle left outline'></Icon>
      <Icon style={{'float':'right'}} size='large' name='arrow alternate circle right outline'></Icon>
    </Card.Content>
  </Card>
)

export default StepDetails