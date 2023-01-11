import React from 'react';
import styled from 'styled-components';

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
    </Container>
  );
};

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
