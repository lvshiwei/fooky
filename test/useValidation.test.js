import { renderHook, act } from '@testing-library/react-hooks'
import { useValidation } from '../dist/index';
import { object, string, number, ValidationError } from 'yup';

const schema = object({
  name: string().required('what is your name').max(12, 'name is too long'),
  age: number().min(18, 'too young')
})



test('field name: is too long', () => {
  expect.assertions(5);
  const {result} = renderHook(() => useValidation(schema));

  act(() => {
    const {validate} = result.current;
    validate({name: 'dear tristan papalison'}).catch(({message})=>{
      expect(message).toEqual('name is too long');
      expect(result.current.errors).toBeInstanceOf(Array);
      expect(result.current.errors.length).toBeGreaterThan(0);
      expect(result.current.errors[0]).toBeInstanceOf(ValidationError);
      expect(result.current.errors[0].message).toEqual('name is too long');
    })
  })

})



test('fields age: too young', () => {
  expect.assertions(2);
  const {result} = renderHook(() => useValidation(schema));

  act(() => {
    const {validate} = result.current;
    validate('age', 5).catch(({message})=>{
      expect(message).toEqual('too young');
      expect(result.current.errors[0].message).toEqual('too young');
    })
  })
})


test('handle multiple fields validation', () => {
  expect.assertions(2);
  const {result} = renderHook(() => useValidation(schema));

  act(() => {
    const {validate} = result.current;
    validate({
      name: 'alibaba and alimama and aligranpa',
      age: 9
    }).catch(()=>{
      expect(result.current.errors[0].message).toEqual('name is too long');
      expect(result.current.errors[1].message).toEqual('too young');
      
    })
  })
})

