import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Editor from '../ace/ace';
import Viewer from '../viewer/viewer';

export default class CodePen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeItem: 'editor',
      script: props.scriptObj.script
    };
  }
  handleItemClick = (e, { name }) => { 
    this.setState({ activeItem: name });
  }
  updateSrc = (srcContent) => {
    this.setState({
      script: srcContent
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      script: nextProps.scriptObj.script
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='editor' active={activeItem === 'editor'} onClick={this.handleItemClick} />
          <Menu.Item
            name='viewer'
            active={activeItem === 'viewer'}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment>
          {
            (activeItem === 'editor')
            ? <Editor updateSrc={this.updateSrc} script = {this.state.script}/>
            : <Viewer script= {this.state.script}/>
          }
        </Segment>
      </div>
    )
  }
}