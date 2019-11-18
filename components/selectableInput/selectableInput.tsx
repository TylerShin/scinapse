import React, { FC, ChangeEvent } from 'react';
import { Formik, Form, Field } from 'formik';
import { InputProps } from '@pluto_network/pluto-design-elements';
import FormikInput from 'components/formikInput/formikInput';

interface Props {
  initialValue: string;
  onSubmitForm: (value: string) => void | Promise<void>;
  availableList: string[];
}

interface FormValues {
  text: string;
}

const SelectableInput: FC<Props & InputProps> = props => {
  const { onSubmitForm, initialValue, availableList, children, ...inputProps } = props;

  return (
    <div>
      <Formik<FormValues>
        initialValues={{ text: initialValue }}
        onSubmit={values => {
          onSubmitForm(values.text);
        }}
      >
        {({ handleChange }) => (
          <Form autoComplete="off">
            <Field
              name="text"
              component={FormikInput}
              {...inputProps}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                console.log(value);
                handleChange(e);
              }}
            />
          </Form>
        )}
      </Formik>
      <ul>
        {availableList.map((word, i) => (
          <li key={i}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectableInput;
