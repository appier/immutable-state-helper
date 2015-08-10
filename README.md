# immutable-state-helper

[![npm version](https://badge.fury.io/js/immutable-state-helper.svg)](http://badge.fury.io/js/immutable-state-helper)
[![CI report](https://travis-ci.org/appier/immutable-state-helper.svg?branch=master)](https://travis-ci.org/appier/immutable-state-helper)
[![immutable-state-helper dependency status](https://david-dm.org/appier/immutable-state-helper.svg)](https://david-dm.org/appier/immutable-state-helper)
[![immutable-state-helper devDependency status](https://david-dm.org/appier/immutable-state-helper/dev-status.svg)](https://david-dm.org/appier/immutable-state-helper#info=devDependencies)

## Install

```
npm install immutable-state-helper
```

## createImmState

Helper function for setState pattern.

Copy and modify from [Immutable-as-React-state](https://github.com/facebook/immutable-js/wiki/Immutable-as-React-state#helper-function-for-setstate-pattern).

### Signature

```
createImmState(thisArg, [field], [callback]): Function
```

### Arguments

1. thisArg  (*): The this binding of React Element.
2. \[field='data'\] (String): The property name that stored in state.
3. \[callback\] (Function): The callback apply into setState's callback.

### Returns

(Function): Immutable version of setState.

### Example

```
import React from 'react';
import { Map } from 'immutable;
import { createImmState } from 'immutable-state-helper';

class Example extends React.Component {

  ...

  onFooChange(value) {
    this.setImmState(
      updater => updater.set('foo', value),
      () => console.log('re-rendered!')
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
