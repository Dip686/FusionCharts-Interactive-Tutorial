import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import CodePen from '../codepen/codepen';
import Narator from '../narator/narator';
import { steps } from '../../data/steps/steps';
import { scripts } from '../../data/scripts/working-scripts';

export default class PlayGround extends Component {
  constructor () {
    super();
    this.state = {
      index: 0
    }
  }
  navHandler = (navigation) => {
    let newIndex = this.state.index;
    if(navigation === 'back') {
      this.setState({
        index: newIndex - 1,
      });
    }else {
      this.setState({
        index: newIndex + 1,
      });
    }
  }
  render() {
    let index = this.state.index;
    return (
        <Grid divided>
          <Grid.Row style={{'padding':'2%'}}>
            <GridColumn width={4}>
              <Narator step = {steps[index]} navHandler= {this.navHandler}/>
            </GridColumn>
            <GridColumn width={12}>
              <CodePen scriptObj = {scripts[index]}/>
            </GridColumn>
          </Grid.Row>
        </Grid>
    )
  }
}