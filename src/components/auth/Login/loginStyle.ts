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
 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border-radius: 10px;
`;

export const StyledDiv = styled.div`
  border-top-width: 2rem;
  border-style: solid;
  border-color: #4f46e5; 
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 3rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 25%;
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
  text-transform: capitalize;
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
    border: 1px solid #cbd5e0;
    border-radius: 0.375rem;
    padding: 0.875rem;
    width: 100%;
    margin-top: 0.25rem;
    background-color: #ffffff;
    color: #1a202c;
    border: 1px solid #e2e8f0;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
  }
  }

  .error-message {
    color: red;
    font-size: 0.85rem;
    margin-top: 0.25rem;
  }
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  transition: all 0.3s ease-in-out;
  display: block;
  padding: 0.75rem 1rem;
  width: 100%; 
  color: #fff; 
  font-weight: bold; 
  border-radius: 0.375rem;
  cursor: pointer; 
  background-image: linear-gradient(to right, #667eea, #8e60ed); 
  background-color: #667eea;
  &:hover {
    background-image: linear-gradient(to right, #667eea, #9c40f9);
    background-color: #667eea;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px); 
  }
  &:focus {
    background-color: #3f37c9;
  }
`;

export const RegisterLink = styled.div`
  margin-top: 1rem;
  font-size: 0.85rem;
  font-size: 18px;
  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;