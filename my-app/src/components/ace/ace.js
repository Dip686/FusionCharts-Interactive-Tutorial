import React, { Component } from 'react'
// import { Grid, Menu, Segment } from 'semantic-ui-react'
// import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/html';
import 'brace/theme/twilight';
import 'brace/ext/language_tools';
import 'brace/snippets/html';

export default class Editor extends Component {
  onChange(newValue) {
    console.log('change', newValue);
  }
  render() {
    return (
      <AceEditor
        placeholder="Placeholder Text"
        mode="html"
        theme="twilight"
        name="blah2"
        width="100%"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={`<script src='https://dasdsadasddasdsadasd_sdasdasdasdsadsa_asdasdasd.com'>,/script>`}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    )
  }
}