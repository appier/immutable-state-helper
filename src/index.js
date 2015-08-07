export function createImmState(context, field='data') {
  return func =>
    context.setState(prevState => ({
      [field]: func(prevState[field])
    }));
}
