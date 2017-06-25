import React, {Component, PropTypes} from 'react';
import {ListView} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

export default class ChatListView extends Component {

  static propTypes = {
    renderMessage: PropTypes.func.isRequired,
    keyboardDismissMode: PropTypes.oneOf(['none', 'interactive', 'on-drag']),
    window: PropTypes.shape({
      messages: PropTypes.array.isRequired
    }).isRequired,
    additionalStyle: PropTypes.object,
  };

  static defaultProps ={
    keyboardDismissMode: 'none',
    additionalStyle: {}
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      ds: ds.cloneWithRows(this.processMessages(props))
    };
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.window && nexProps.window.messages !== this.props.window.messages) {
      this.setState({ds: this.state.ds.cloneWithRows(this.processMessages(nexProps))});
    }
  }

  processMessages(props) {
    return props.window.messages.reverse();
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.ds}
        renderRow={this.props.renderMessage}
        style={[{flex: 1}, this.props.additionalStyle]}
        renderScrollComponent={props => <InvertibleScrollView {...props} testID={'list'} inverted/>}
        keyboardDismissMode={this.props.keyboardDismissMode}
        />
    );
  }
}
