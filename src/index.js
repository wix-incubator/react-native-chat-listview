import React, {Component, PropTypes} from 'react';
import {ListView} from 'react-native';

export default class ChatListView extends Component {

  static propTypes = {
    renderMessage: PropTypes.func.isRequired,
    window: PropTypes.shape({
      messages: PropTypes.array.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      ds: ds.cloneWithRows(props.window.messages)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={this.props.renderMessage}
        testID={'list'}
        style={{flex: 1}}
        renderClippedSubviews
        />
    );
  }
}
