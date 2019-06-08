import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import StepDetails from '../stepdetails/stepdetails';
export default class Narator extends Component {

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Menu widths={1}>
            <Menu.Item>Step - 4</Menu.Item>
          </Menu>
        </Grid.Row>
        <Grid.Row>
          <StepDetails/>
        </Grid.Row>
      </Grid>
    )
  }
}