import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import StepDetails from '../stepdetails/stepdetails';
export default class Narator extends Component {

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Menu widths={1}>
            <Menu.Item>Step - {this.props.step.id}</Menu.Item>
          </Menu>
        </Grid.Row>
        <Grid.Row>
          <StepDetails navHandler= {this.props.navHandler} step = {this.props.step}/>
        </Grid.Row>
      </Grid>
    )
  }
}