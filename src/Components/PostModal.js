import styled from 'styled-components';
import React from 'react';

const PostModal = (props) => {
  return (
    <Container>
        <Content>
          <Header>
            <h2>Create a post</h2>
            <button>
            <img src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png" alt="" width="30px" />
            </button>
          </Header>
        </Content>
      
   </Container>
  )
}

const Container = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
z-index:200;
color:black;
background-color:rgba(0,0,0,0.8);
`;

const Content = styled.div`
  width:100%;
  max-width:552px;
  background-color:white;
  max-height:90%;
  overflow:initial;
  border-radius:9px;
  position:relative;
  display:flex;
  flex-direction:column;
  top:52px;
  margin:0 auto;
`;

const Header = styled.div`
  display:block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  font-size:16px;
  line-height:1.5;
  color:rgba(0,0,0,0.6);
  font-weight:400;
  display:flex;
  justify-content:space-between;
  align-items:center;
  button{
    height:40px;
    width:40px;
    min-width:auto;
    color:rgba(0,0,0,0.15);
    border:none;
    background-color:white;
    border-radius:9px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
      pointer-events:none;
    }
    &:hover{
      background-color:rgba(0,0,0,0.8);
    }
  }
`;



export default PostModal;