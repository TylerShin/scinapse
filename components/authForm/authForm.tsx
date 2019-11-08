import React from 'react';
import { gql } from 'apollo-boost';
import { Formik, Form, Field } from 'formik';
import FormikInput from 'components/formikInput/formikInput';
import { Button } from '@pluto_network/pluto-design-elements';
import { useMutation } from '@apollo/react-hooks';

interface FormValues {
  email: string;
  password: string;
}

const LOG_IN_WITH_EMAIL = gql`
  mutation LogInWithEmail($email: String!, $password: String!) {
    logInWithEmail(email: $email, password: $password) {
      loggedIn
      member {
        email
      }
    }
  }
`;

const AuthForm = () => {
  const [logIn, { loading, error }] = useMutation(LOG_IN_WITH_EMAIL, {
    onCompleted: res => {
      console.log(res);
    },
  });

  return (
    <Formik<FormValues>
      initialValues={{ email: '', password: '' }}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting }) => {
        logIn({ variables: values });
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            type="email"
            name="email"
            component={FormikInput}
            labelText="email"
            error={errors.email && touched.email && errors.email}
          />
          <Field
            type="password"
            name="password"
            component={FormikInput}
            labelText="password"
            error={errors.password && touched.password && errors.password}
          />
          <Button elementType="button" type="submit" size="large" fullWidth>
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
