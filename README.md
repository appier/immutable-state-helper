# immutable-state-helper

## Helper function for setState pattern

https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state#helper-function-for-setstate-pattern

## Example

```
import { Map } from 'immutable;
import React from 'react';
import { createImmState } from 'immutable-state-helper';

class Example extends React.Component {

  ...

  onFooChange(value) {
    this.setImmState(
      updater => updater.set('foo', value)
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      immData: Map({
        foo: '',
        bar: ''
      })
    }

    this.setImmState = createImmState(this, 'immData');
  }

  render() {
    const { immData } = this.state;

    return <div>{ immData.get('foo', '') }</div>;
  }
}

```
