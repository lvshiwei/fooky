# fooky

fooky is React form hooks library for model binding and validation.

# Install

```shell
$ npm i fooky
```

# How to use

```jsx
import React from 'react';
import { useModel, useValidation } from '../dist/index';
import { object, string, number} from 'yup';

export default function() {
  const [model, setModel] = useModel({ age: 18 })
  const {validate, hasError, getErrors} = useValidation(object({
    name: string().max(5, "name is too long."),
    age: number().min(18, "too young"),
  }));

  const handleSubmit = () => validate(model);

  const highlight = {color: 'red'};

  return <React.Fragment>
    <form>
      <input placeholder="please type name" value={model.name} onChange={()=> setModel('name')} onBlur={() => validate('name')}></input>
      { 
        hasError('name') && <div className="error" style={highlight}>{ getErrors('name') }</div> 
      }
      <input placeholder="how old?" value={model.age} onChange={()=> setModel('age')} onBlur={() => validate('age')}></input>
      { 
        hasError('age') && <div className="error" style={highlight}>{ getErrors('age') }</div>
      }
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </React.Fragment>
}
```

# useModel

useModel is for model binding.

```javascript
const [model, setModel] = useModel({ age: 8 });

// set a field
setModel("age", 15);
// model => {age:  15}

// set an object will merge
setModel({ gender: "femal" });
// model => {age: 15, gender: 'femal'}
```

# useValidation

useValidation is for validation, depends on [Yup](https://github.com/jquense/yup)

```javascript
const schema = yup.object({
  name: string().max(5, "name is too long."),
  age: number().min(18, "too young"),
});

const model = { name: "dear tristan papason", age: 9 };
const {validate} = useValidation(schema);

validate(model).catch(console.error);

// ValidationErrors{
//  errors: ['name is too long', 'too young']
//  ...
// }

validate("age", 13).catch(console.error);

// ValidationErrors{
//   errors: ['too young']
// }
```
