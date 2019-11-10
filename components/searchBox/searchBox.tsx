import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import FormikInput from 'components/formikInput/formikInput';
import SearchIcon from 'atoms/icons/search.svg';

interface FormValues {
  query: string;
}

interface Props {
  initialValue: string;
  onSubmit: (values: FormValues) => void;
}

const SearchIconBox = styled.i`
  cursor: pointer;
`;

const SearchBox: FC<Props> = ({ initialValue, onSubmit }) => {
  return (
    <Formik<FormValues>
      initialValues={{ query: initialValue }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ submitForm }) => (
        <Form style={{ width: '100%' }}>
          <Field
            name="query"
            component={FormikInput}
            leadingIcon={
              <SearchIconBox onClick={submitForm}>
                <SearchIcon />
              </SearchIconBox>
            }
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
