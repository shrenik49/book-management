import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for form validation
import { useAuth } from '../../../Context/authContext';
import {
  LoginFormContainer,
  Title,
  FormGroup,
  Button,
  RegisterLink,
  CenteredBackground,
  StyledDiv,
} from './loginStyle';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: LoginFormValues) => {
    const { email, password } = values;
    login(email, password);
  };

  return (
    <CenteredBackground>
      <StyledDiv>
        <LoginFormContainer>
          <Title>LOGIN</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error-message" />
              </FormGroup>
              <Button type="submit">Login</Button>
            </Form>
          </Formik>
          <RegisterLink>
            Don't have an account? <Link to="/register">Register</Link>
          </RegisterLink>
        </LoginFormContainer>
      </StyledDiv>
    </CenteredBackground>
  );
};

export default LoginForm;
