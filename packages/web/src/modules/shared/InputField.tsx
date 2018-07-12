import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input } from 'antd';

const FormItem = Form.Item;


// <div>
//   <input type="text" {...field} {...props} />
//   {touched[field.name] &&
//     errors[field.name] && <div className="error">{errors[field.name]}</div>}
// </div>

export const InputField: React.SFC<
  FieldProps<any> & { prefix: React.ReactNode }
  > = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
    const errorMsg = touched[field.name] && errors[field.name];
    return (
      <FormItem
        help={errorMsg} validateStatus={errorMsg ? "error" : undefined} >
        <Input
          {...field}
          {...props}
        />
      </FormItem >
    );
  }