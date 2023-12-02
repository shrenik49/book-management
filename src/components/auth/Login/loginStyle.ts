import styled from 'styled-components';

// export const LoginFormContainer = styled.div`
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #f9f9f9;
// `;

// export const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
// `;

// export const FormGroup = styled.div`
//   margin-bottom: 15px;

//   label {
//     display: block;
//     margin-bottom: 5px;
//   }

//   input {
//     width: 100%;
//     padding: 8px;
//     border-radius: 4px;
//     border: 1px solid #ccc;
//     outline: none;

//     &:focus {
//       border-color: #007bff;
//     }
//   }

//   .error-message {
//     color: red;
//     font-size: 0.8em;
//   }
// `;

// export const Button = styled.button`
//   display: block;
//   width: 100%;
//   padding: 10px;
//   margin-top: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const RegisterLink = styled.p`
//   text-align: center;

//   a {
//     color: #007bff;
//     text-decoration: none;
//     font-weight: bold;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

export const CenteredBackground = styled.div`
  background-color: #e5e7eb; /* Change this color as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border-radius: 10px;
`;

export const StyledDiv = styled.div`
  border-top-width: 2rem; /* Border top width */
  border-style: solid;
  border-color: #4f46e5; /* Indigo-600 color */
  border-radius: 0.25rem; /* Rounded corners */
  background-color: #fff; /* White background */
  padding: 3rem; /* Padding */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow effect */
  width: 24rem; /* Width */

  /* Add any additional styles as needed */
`;

export const StyledHeading = styled.h1`
  font-weight: bold; /* Font weight */
  text-align: center; /* Text alignment */
  display: block; /* Display as block element */
  font-size: 2rem; /* Font size */
  /* Add any additional styles as needed */
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .error-message {
    color: red;
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #4f46e5;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 1rem;
  font-size: 0.85rem;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;