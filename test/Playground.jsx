import React from 'react';
import { useModel, useValidation } from 'fooky';
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
      <input placeholder="please type name" value={model.name} onChange={(e)=> setModel('name', e.target.value)} onBlur={(e) => validate('name', e.target.value)}></input>
      { 
        hasError('name') && <div className="error" style={highlight}>{ getErrors('name') }</div> 
      }
      <input placeholder="how old?" value={model.age} onChange={(e)=> setModel('age', e.target.value)} onBlur={(e) => validate('age', e.target.value)}></input>
      { 
        hasError('age') && <div className="error" style={highlight}>{ getErrors('age') }</div>
      }
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </React.Fragment>
}
  