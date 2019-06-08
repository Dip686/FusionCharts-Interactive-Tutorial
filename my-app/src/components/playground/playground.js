import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import CodePen from '../codepen/codepen';
import Narator from '../narator/narator';
export default class PlayGround extends Component {

  render() {
    return (
        <Grid divided>
          <Grid.Row style={{'padding':'2%'}}>
            <GridColumn width={4}>
              <Narator/>
            </GridColumn>
            <GridColumn width={12}>
              <CodePen/>
            </GridColumn>
          </Grid.Row>
        </Grid>
    )
  }
}