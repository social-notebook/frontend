import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import RichTextExample from './RichTextExample';

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endpoint: process.env.REACT_APP_SERVER
    }

    this.uniqueID = Math.round(Math.random() * 1000000000000);

    this.socket = socketIOClient('http://192.168.20.131:3000');

    this.socket.on('update content', data => {
      const content = JSON.parse(data)
      const { uniqueID, content: ops } = content;
      if (ops !== null && this.uniqueID !== uniqueID) {
        setTimeout(() => {
          this.slate.applyOperations(ops);
        });
      }
    });
  }

  send = content => {
    const data = JSON.stringify(content);
    this.socket.emit('updatecontent', data);
  }

  onChange = change => {
    // const ops = change.operations
    //   .filter(o => o.type !== 'set_selection' && o.type !== 'set_value')
    //   .toJS();

    // if (ops.length > 0) {
    //   this.send(ops);
    // }
    const data = JSON.stringify(change);
    this.send(data);
  }

  render() {
    return (
      <RichTextExample
        ref={slateE => { this.slate = slateE; }}
        onChange={this.onChange}
      />
    );
  }
};

export default Editor;