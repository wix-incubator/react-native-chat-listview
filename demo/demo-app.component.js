import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableOpacity} from 'react-native';
import data from './data';
import data2 from './data2';

import ChatListView from '../src/chat-list-view';

export default class ChatListViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: data};
  }

  render() {
    const {messages} = this.state;
    return (
      <View style={{flex: 1}}>
        <ChatListView
          window={{messages}}
          renderMessage={(item, sectionId, rowId) =>
            <Text testID={'bubble'}
                  key={rowId}
                  style={{height: 100, padding: 5, backgroundColor: 'orange', margin: 5}}>
              {item}
            </Text>
          }
          />
        <TouchableOpacity testID={'dataSet2'} onPress={() => this.useDataSet2()}>
          <Text>Use Dataset 2</Text>
        </TouchableOpacity>
      </View>

    );
  }

  useDataSet2() {
    this.setState({messages: data2});
  }
}

AppRegistry.registerComponent('ChatListviewDemo', () => ChatListViewDemo);
