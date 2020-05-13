import { renderHook, act } from '@testing-library/react-hooks'
import { useModel } from '../dist/index';


test('initialize a model with values { age: 8 }', () => {
  const {result} = renderHook(() => useModel({ age: 8 }));
  expect(result.current[0].age).toEqual(8);
});


test('set age to 19', () => {
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [, setModel] = result.current;
  act(()=>{
    setModel({age: 19});
  });
  expect(result.current[0].age).toEqual(19);
})

test('merge new field name: tristan, then got new object with two fields, name & age', () => {
  
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [, setModel] = result.current;
  act(()=>{
    setModel({name: 'tristan'})
  });

  expect(result.current[0].age).toEqual(8);
  expect(result.current[0].name).toEqual('tristan');

})


test('both assign and make new field, { age: 21, name: "tristan", gender: "FEMAL"}', () => {
  
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [, setModel] = result.current;
  act(()=>{
    setModel({name: 'tristan', age: 21, gender: "FEMAL"})
  });

  expect(result.current[0].age).toEqual(21);
  expect(result.current[0].name).toEqual('tristan');
  expect(result.current[0].gender).toEqual('FEMAL');

})