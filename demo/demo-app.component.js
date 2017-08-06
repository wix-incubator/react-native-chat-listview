import React, {Component} from 'react';
import {AppRegistry, Text, View, TouchableOpacity} from 'react-native';
import data from './data';
import data2 from './data2';

import ChatListView from '../src/chat-list-view';

export default class ChatListViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: data, showFooter: false};
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
          renderFooter={() => this.state.showFooter && <View testID={'footer-view'} style={{height: 50, backgroundColor: 'red'}}><Text>{'i am a footer'}</Text></View>}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity testID={'dataSet2'} onPress={() => this.useDataSet2()}>
            <Text>Use Dataset 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 50}} testID={'toggle-footer'} onPress={() => this.showFooter()}>
            <Text>Toggle Footer</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }

  useDataSet2() {
    this.setState({messages: data2});
  }

  showFooter() {
    const showFooter = !this.state.showFooter;
    this.setState({showFooter});
  }
}

AppRegistry.registerComponent('ChatListviewDemo', () => ChatListViewDemo);
