import React from 'react';
import styled from 'styled-components';
import Main from './Main.js';
import Leftside from './Leftside.js';
import Rightside from './Rightside.js';

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a Hurry ? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-areas:"leftside main rightside";
  grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
  column-gap:25px;
  row-gap:25px;
  grid-template-row:auto;
  margin:25px;

  @media (max-width:768px){
    display:flex;
    flex-direction:column;
    padding: 0 5px;
    
  }
`;





const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;



`;
const Section = styled.section`
  min-height:50px;
  padding: 16px;
  box-sizing: content-box;
  text-align: center;  
  display:flex;
  font-size:14px;
  justify-content: center;
  h5{
    a{
    color: #0a66c2;
    font-weight:700px;
    }
  }
  p{
    color: #434649;
    font-weight: 700;
  }

  @media (max-width:768px){
    flex-direction: column;
    padding: 0 5px;
  }

`;

export default Home;
