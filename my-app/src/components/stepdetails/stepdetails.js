import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class StepDetails extends React.Component {

  render() {
    const {step} = this.props;
    return (
      <Card fluid>
        <Card.Content header= {step.sampleHeader} />
        <Card.Content>
          <div style={{"textAlign": "left", "overflow":"scroll", "height":"500px"}} dangerouslySetInnerHTML={{ __html: step.description }}></div>
        </Card.Content>
        <Card.Content extra>
          <Icon onClick={()=>{this.props.navHandler('back')}} style={{ 'float': 'left' }} size='large' name='arrow alternate circle left outline'></Icon>
          <Icon onClick={()=>{this.props.navHandler('forward')}} style={{ 'float': 'right' }} size='large' name='arrow alternate circle right outline'></Icon>
        </Card.Content>
      </Card>
    );
  }
}
export default StepDetails