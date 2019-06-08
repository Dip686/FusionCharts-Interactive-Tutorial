import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleSizeMini extends Component {

  render() {
    return (
      <Menu>
        <Grid columns='equal' divided padded>
          <Grid.Row textAlign='center' size='huge'>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Segment basic size='large' style={{'fontSize':'16px'}}>
                FusionCharts - Interactive Tutorial (Getting Started)
              </Segment>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu>
    )
  }
}