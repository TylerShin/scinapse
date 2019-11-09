import React from 'react';
import { gql } from 'apollo-boost';
import { Formik, Form, Field } from 'formik';
import FormikInput from 'components/formikInput/formikInput';
import { Button } from '@pluto_network/pluto-design-elements';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GetCurrentUser } from './types/GetCurrentUser';
import { LogInWithEmail } from './types/LogInWithEmail';
import { CURRENT_USER } from 'graphql-client/user';

interface FormValues {
  email: string;
  password: string;
}

const LOG_IN_WITH_EMAIL = gql`
  mutation LogInWithEmail($email: String!, $password: String!) {
    logInWithEmail(email: $email, password: $password) {
      loggedIn
      member {
        id
        email
      }
    }
  }
`;

const AuthForm = () => {
  const [logIn, { loading, error }] = useMutation<LogInWithEmail>(LOG_IN_WITH_EMAIL, {
    update(cache, { data }) {
      console.log(data);
      cache.writeQuery({
        query: CURRENT_USER,
        data: { currentUser: data?.logInWithEmail },
      });
    },
  });

  const { data: user } = useQuery<GetCurrentUser>(CURRENT_USER);

  console.log('user in form', user);

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
