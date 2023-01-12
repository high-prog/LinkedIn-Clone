import styled from 'styled-components';
import React from 'react';

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add Photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  );
};
const Container = styled.div`
  grid-area:leftside;

`;

const ArtCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition: box-shadow 83ms;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgba(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);

`;

const UserInfo = styled.div`
  border-bottom:1px solid rgba(0,0,0,0.15);
  padding:12px 12px 16px;
  word-wrap:break-word;
  word-break:break-word;
  
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  margin: -12px -12px 0; 
  height:54px;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width:72px;
  height:72px; 
  box-sizing:border-box;
  background-clip:content-box;
  background-color:white;
  background-position:center;
  background-size:80%;
  background-repeat:no-repeat;
  border: 2px solid white;
  margin: -38px auto 5px;
  border-radius:10%;
`;

const Link = styled.div``;
const AddPhotoText = styled.div``;

export default Leftside;
