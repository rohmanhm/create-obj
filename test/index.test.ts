import { CreateObj } from '../src/index';

test('remove falsy key value from object', () => {
  const expected = {
    className: 'only-this-obj-key-will-persist',
  };

  const actual = CreateObj({
    ...expected,
    disabled: '',
    autoComplete: false,
    checked: undefined,
    spellCheck: null,
  });

  expect(actual).toEqual(expected);
});
