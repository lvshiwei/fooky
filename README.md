# fooky

fooky is React form hooks library for model binding and validation.

# Install

```shell
$ npm i fooky
```

# How to use

```jsx
  import React from 'react';
  import classnames from 'classnames';
  import { object, string, number } from 'yup';

  export default function() {
    const [model, setModel] = useModel({ age: 18 })
    const [validate, errors, hasError, getErors] = useValidation(object({
      name: string().max(5, "name is too long."),
      age: number().min(18, "too young"),
    }));
    const renderClassName = (name) => classnames({
      error: hasError(name)
    });

    const handleSubmit = () => {
      validate(model)
        .then(()=> alert('amazing!'))
        .catch(() => {
          console.error(errors)
        });
    }

    return <form>
        <input placeholder="please type name" value={model.name} onChange={()=> setModel('name')} onBlur={() => validate('name')}></input>
        { 
          hasError('name') && <div>{ getErrors('name') }</div> 
        }
        <input placeholder="how old?" value={model.age} onChange={()=> setModel('age')} onBlur={() => validate('age')}></input>
        { 
          hasError('age') && <div>{ getErrors('age') }</div>
        }

        <button type="submit" onClick={handleSubmit}>
    </form>
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
const [validate, errors] = useValidation(schema);

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
