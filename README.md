# immutable-state-helper

[![npm version](https://badge.fury.io/js/immutable-state-helper.svg)](http://badge.fury.io/js/immutable-state-helper)
[![immutable-state-helper dependency status](https://david-dm.org/appier/immutable-state-helper.svg)](https://david-dm.org/appier/immutable-state-helper)
[![immutable-state-helper devDependency status](https://david-dm.org/appier/immutable-state-helper/dev-status.svg)](https://david-dm.org/appier/immutable-state-helper#info=devDependencies)

## Install

```
npm install immutable-state-helper
```

## createImmState

Helper function for setState pattern

Extend from:
https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state#helper-function-for-setstate-pattern

### Example

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
