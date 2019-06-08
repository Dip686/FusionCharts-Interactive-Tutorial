import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
export default class Viewer extends Component {

  render() {
    return (
      <Grid divided>
        <Grid.Row>
          <iframe width="100%"  height="500px" title="FC-Viewer" id="FC-Loader"></iframe>
        </Grid.Row>
      </Grid>
    )
  }
}