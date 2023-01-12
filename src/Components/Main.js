import styled from 'styled-components';
import React from 'react';

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>

        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div`
  grid-area:main;
  
`;

const CommonCard = styled.div`
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
position:relative;
border:none;
box-shadow:0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
display:flex;
flex-direction:column;
color: #95847b;
background:white;
padding:10px 0;

div{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  button{
    outline:none;
    color:rgba(0,0,0,0.6);
    font-size:14px;
    line-height:1.5;
    min-height:48px;
    background:transparent;
    cursor:pointer;
    display:flex;
    align-items:center;
    font-weight:600;
    border:none;
    img{
      width:30px;
      height:30x;
      margin-right:3px;
    }
  }

  &:first-child{
    display:flex;
    align-items:center;
    justify-content:row-start;
    padding:4px 8px;
    img{
      width:40px;
      border-radius:50%;
      margin-right:8px;
    }
    button{
      flex-grow:1;
      border-radius:35px;
      background-color:white;
      padding-left:16px;
      border: 1px solid rgba(0,0,0,0.15);
      text-align:left;
    }
  }
 &:nth-child(2){
   
 }


}

`;

export default Main;
