import { renderHook, act } from '@testing-library/react-hooks'
import { useValidation } from '../dist/index';
import { object, string, number } from 'yup';

const schema = object({
  name: 'tristan',
  age: 8,
  gender: "FEMAL"
})

test('make new validation with schema', () => {
  const {result} = renderHook(() => useValidation(schema));
  const [validate] = result.current;

  expect(typeof validate === 'function');
});

