/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ListView
} from 'react-native';
import data from './data';

export default class ChatListviewDemo extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      ds: ds.cloneWithRows(data)
    };
  }

  render() {
    return (
        <ListView
          dataSource={this.state.ds}
          renderRow={(item, index) =>
            <Text key={index}
                  style={{height: 100, padding: 5, backgroundColor: 'orange', margin: 5}}>
              {item}
            </Text>
          }
          testID={'list'}
          style={{flex: 1}}
          renderClippedSubviews={true}
          />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ChatListviewDemo', () => ChatListviewDemo);
