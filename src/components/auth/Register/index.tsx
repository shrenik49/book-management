import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../Context/authContext';
import { Link } from 'react-router-dom';
import {
  LoginFormContainer,
  Title,
  FormGroup,
  Button,
  RegisterLink,
  CenteredBackground,
  StyledDiv,
} from '../Login/loginStyle';

interface RegisterFormValues {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { register } = useAuth();

  const initialValues: RegisterFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values: RegisterFormValues) => {
    const { email, password } = values;
    console.log('Register Email:', email);
    console.log('Register Password:', password);
    register(email, password);
  };

  return (
    <CenteredBackground>
      <StyledDiv>
        <LoginFormContainer>
          <Title>REGISTER</Title>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
              <Button type="submit">Register</Button>
              <RegisterLink>
                Already registered? <Link to="/login">Login</Link>
              </RegisterLink>
            </Form>
          </Formik>
        </LoginFormContainer>
      </StyledDiv>
    </CenteredBackground>
  );
};

export default RegisterForm;
