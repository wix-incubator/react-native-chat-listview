# react-native-chat-listview
WIP - NOT READY FOR PRODUCTION

### Types
`Position`: numeric value, assumed to be unique per chatroom and ordered with older messages having lower values. It is sparse, meaning there are gaps between values.
Although it is NOT the concern of `chat-listview`, this probably represents the timestamp on the message.

### Props

```js
const Position = function(props, propName, componentName) {
  const value = props[propName];
  if (typeof value !== 'number') {
    return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '` Position must be a numeric value.'
      );
    }
  };
const endpoint = PropTypes.shape({
    position: Position.isRequired,
    estimatedMessageCountToLocus: Position.isRequired
  }).isRequired,

static propTypes = {
  retrieveWindowSurrounding: PropTypes.func.isRequired,
  setReadPosition: PropTypes.func.isRequired,
  window: PropTypes.shape({
    bufferSize: PropTypes.int.isRequired,
    locus: Position.isRequired,
    positions: PropTypes.arrayOf(Position).isRequired,
    messages: PropTypes.object.isRequired //the keys of the properties are Position values, and the values are the message data: TBD
  }).isRequired,
  first: endPoint,
  last: endPoint,
  unreadCount: PropTypes.number.isRequired,
  unreadPosition: PropTypes.instanceOf(Position)
}
```

###Callback Signatures
```js
retrieveWindowSurrounding(position: Position, deltaMessageCount: int) //deltaMessageCount should be relatively small
setReadPosition(position: Position)
```

###Locus?? WTF? 
It's an actual [English word](https://www.merriam-webster.com/dictionary/locus). Go ahead and casually drop it in conversations! In addition to making you sound smarter than you are, it's an efficient way to confuse your listeners so they won't challenge your ideas. Trust me. 

_Note: The word is pronounced similar to "locust", the thing that eats crops and pisses off farmers. The plural form of locus is *loci*, similar to the way octopus is pluralized as octopi, abacus is pluralized as abaci, and uterus becomes uteri*. In case you were wondering._

_*See also: nucleus and fungus, but not status and maybe not fetus._
