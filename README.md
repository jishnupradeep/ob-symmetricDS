# Usage

## ES6

```
import obSymmetric from 'ob-symmetric';

export default class SomeReactComponent extends Component {
    render() {
        return <Card titleColor={obSymmetric.color.black-60} />
    }
}
```

## CommonJS

```
var obSymmetric = require('ob-symmetric');

module.exports = React.createClass({
    render: function() {
        return <Card titleColor={obSymmetric.color.blue-13} />
    }
})
```