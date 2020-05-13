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
  