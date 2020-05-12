import { renderHook, act } from '@testing-library/react-hooks'
import { useModel } from '../dist/index';


test('initialize a model with values { age: 8 }', () => {
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [model] = result.current;

  expect(model.age === 8);
});


test('set age to 19', () => {
  
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [model, setModel] = result.current;
  act(()=>{
    setModel('age', 19)
  });

  expect(model.age === 19);
})

test('merge new field name: tristan, then got new object with two fields, name & age', () => {
  
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [model, setModel] = result.current;
  act(()=>{
    setModel({name: 'tristan'})
  });

  expect(model.age === 8);
  expect(model.name === 'tristan');

})


test('both assign and make new field, { age: 21, name: "tristan", gender: "FEMAL"}', () => {
  
  const {result} = renderHook(() => useModel({ age: 8 }));
  const [model, setModel] = result.current;
  act(()=>{
    setModel({name: 'tristan', age: 21, gender: "FEMAL"})
  });

  expect(model.age === 21);
  expect(model.name === 'tristan');
  expect(model.gender === 'FEMAL');

})