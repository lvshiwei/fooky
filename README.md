# fooky
fooky is React form hooks library for model binding and validation.

# Install
```shell
$ npm i fooky
```

# useModel
useModel is for model binding.

```javascript
const [model, setModel] = useModel({ age: 8 });

// set a field
setModel('age', 15);
// model => {age:  15}

setModel({ gender: 'femal' });
// model => {age: 15, gender: 'femal'}
```

# useValidation

useValidation is for validation, depends on [Yup](https://github.com/jquense/yup)

```javascript
const schema = yup.object({
  name: string().max(5, 'name is too long.'),
  age: number().min(18, 'too young'),
});

const model = { name: 'dear tristan papason', age: 9 };
const [validate, errors] = useValidation(schema);

validate(model).catch(console.error);

// ValidationErrors{
//  errors: ['name is too long', 'too young']
//  ...
// }

validate('age', 13).catch(console.error);

// ValidationErrors{
//   errors: ['too young']
// }

```
