import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';
import FormikInput from 'components/formikInput/formikInput';
import SearchIcon from 'atoms/icons/search.svg';
import { useRouter } from 'next/router';

interface FormValues {
  query: string;
}

interface Props {
  initialValue: string;
}

const SearchIconBox = styled.i`
  cursor: pointer;
`;

const SearchBox: FC<Props> = ({ initialValue }) => {
  const router = useRouter();
  return (
    <Formik<FormValues>
      initialValues={{ query: initialValue }}
      onSubmit={values => {
        router.push({
          pathname: '/search',
          query: {
            query: values.query,
          },
        });
      }}
    >
      {({ submitForm }) => (
        <Form style={{ width: '100%' }} autoComplete="off">
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
