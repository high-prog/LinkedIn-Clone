import React from 'react';
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Signin>Sign In</Signin>
        </div>
      </Nav>
    </Container>
  );
};


const Join = styled.a`
  font-size:16px;
  padding: 10px 12px;
  text-decoration:none;
  border-radius:4px;
  color:rgba(0,0,0,0.6)
  margin-right:12px;

  &:hover{
    background-color:rgba(0,0,0,0.09);
    color:#0a66c2;
    border-radius:24px;
    text-decoration:none;
  }
`;

const Signin = styled.a`

`;


const Container = styled.div`
  padding: 0px;

`;
const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
position:relative;
justify-content:space-between;
flex-wrap: nowrap;

& > a {
  width:135px;
  height:34px;
}

@media (max-width:768px){
  padding: 10px 5px;
}


`;
export default Login;
