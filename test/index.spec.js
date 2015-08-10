import expect from 'expect';
import { createImmState } from '../src';

describe('createImmState', () => {
  it('should returns a function', () => {
    const setImmState = createImmState({});
    expect(setImmState).toBeA(Function);
  });
});
