import invariant from 'invariant';

export function noop() {}

export function createImmState(context, field = 'data', callback = noop) {
  invariant(typeof context === 'object', '`context` should be an object');
  invariant(typeof field === 'string', '`field` should be a string');
  invariant(field, '`field` should not be empty');
  invariant(typeof callback === 'function', '`callback` should be a function');

  return func =>
    context.setState(
      prevState => ({ [field]: func(prevState[field]) }),
      callback
    );
}
