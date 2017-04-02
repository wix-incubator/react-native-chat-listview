import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';
import data from './data';
import ChatListView from '../src';

export default class ChatListViewDemo extends Component {
  render() {
    return (
        <ChatListView
          window={{messages: data}}
          renderMessage={(item, index) =>
            <Text key={index}
                  style={{height: 100, padding: 5, backgroundColor: 'orange', margin: 5}}>
              {item}
            </Text>
          }
          />

    );
  }
}

AppRegistry.registerComponent('ChatListviewDemo', () => ChatListViewDemo);
