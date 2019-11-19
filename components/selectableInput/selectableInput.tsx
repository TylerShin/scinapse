import React, { FC, ChangeEvent, useState, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { InputProps } from '@pluto_network/pluto-design-elements';
import FormikInput from 'components/formikInput/formikInput';
import useOutsideClick from 'hooks/useOutsideClick';

interface Props {
  initialValue: string;
  onSubmitForm: (value: string) => void | Promise<void>;
  onChangeField: (value: string) => void | Promise<void>;
  availableList: JSX.Element[];
}

interface FormValues {
  text: string;
}

const SelectableInput: FC<Props & InputProps> = props => {
  const { onSubmitForm, onChangeField, initialValue, availableList, children, ...inputProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement | null>(null);

  useOutsideClick(wrapper, () => isOpen && setIsOpen(false));

  return (
    <div ref={wrapper} onClick={e => e.target}>
      <Formik<FormValues>
        initialValues={{ text: initialValue }}
        onSubmit={values => {
          onSubmitForm(values.text);
        }}
      >
        {({ handleChange, values }) => (
          <Form autoComplete="off">
            <Field
              name="text"
              component={FormikInput}
              {...inputProps}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                handleChange(e);
                onChangeField(value);
                if (value.length > 0) setIsOpen(true);
              }}
              onFocus={() => {
                onChangeField(values.text);
                setIsOpen(true);
              }}
            />
          </Form>
        )}
      </Formik>
      <ul onClick={() => setIsOpen(false)}>{isOpen && availableList}</ul>
    </div>
  );
};

export default SelectableInput;
