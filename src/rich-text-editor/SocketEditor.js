import React, { Component } from 'react';
import PropTypes from 'prop-types'
import socketIOClient from 'socket.io-client';
import {URL_HOST} from '../config.js'
import RichTextExample from './RichTextExample';
import initialValue from './value.json'

class Editor extends Component {
  constructor(props) {
    super(props);
    const ownerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiYyIsImlhdCI6MTU0MzA3NzIwNH0.6ZIqvSAqxMjBo4g8_0qR2XT9rxFbr52f6KLJBNfwCbM"
    // this.uniqueID = Math.round(Math.random() * 1000000000000);
    this.socket = socketIOClient(URL_HOST);
    this.socket.on('typing', data => {
      console.log('typing', data)
      if(data.token !== localStorage.getItem('token')){
        if(this.slate && data.content){
          const dataContent = JSON.parse(data.content)
                    console.log('listen evnt', dataContent)

          this.slate.setContentValue(dataContent); 
        }
      }
    });
    // check if user is owner of this note
    this.state = {
      isOwner: false,
      content: initialValue,
    }
    const current_token = localStorage.getItem('token');
    if (current_token === ownerToken) this.setState({isOwner: true})
  }

  send = content => {
    const token = localStorage.getItem('token')
    const data = JSON.stringify({content, token});
    this.socket.emit('updatecontent', data);
  }

  onChange = change => {
    const data = JSON.stringify(change);
    console.log('check update', data)
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