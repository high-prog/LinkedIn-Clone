import styled from 'styled-components';
import React, { useState } from 'react';

const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <img
              src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
              alt=""
              width="30px"
            />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            <img src="/images/user.svg" alt="" />
            <span>Name</span>
          </UserInfo>
          <Editor>
          <textarea 
          value={editorText} 
          onChange={(e) => setEditorText(e.target.value)}
          placeholder="Type Something to post"
          autofocus={true}
          ></textarea>
          </Editor>
        </SharedContent>
        <SharedCreation>
          <AttachAssets>
            <AssetButton>
              <img
                src="https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png"
                alt=""
                width="20px"
              />
            </AssetButton>
            <AssetButton>
              <img
                src="https://w7.pngwing.com/pngs/757/1013/png-transparent-upload-video-film-movie-user-interface-icon.png"
                alt=""
                width="20px"
              />
            </AssetButton>
          </AttachAssets>
          <ShareComment>
            <AssetButton>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png"
                alt=""
                width="20px"
              />
              Anyone
            </AssetButton>
          </ShareComment>
          <PostButton>Post</PostButton>
        </SharedCreation>
      </Content>
    </Container>
  );
};

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
    cursor:pointer;
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
    outline:none;
    img{
      pointer-events:none;
    }
    &:hover{
      background-color:rgba(0,0,0,0.15);
    }
    &:active{
      transform:translateY(1.5px);
    }


  }
`;
const SharedContent = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow:1;
  overflow-y:auto;
  overflow-x:hidden;
  vertical-align: baseline;
  background:transparent;
  // padding: 8px 12px;

`;

const UserInfo = styled.div`
  display:flex;
  align-items:center;
  padding:12px 24px;
  img,svg{
    width:40px;
    height:40px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span{
    font-weight:600;
    font-size:16px;
    line-height:1.5;
    margin:5px;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
  border: 1px solid transparent;
  background-color:white;
  outline:none;
  height: 30px;
  color: rgba(0,0,0,1);
  border-radius:10px;
  &:hover{
    background-color:rgba(0,0,0,0.15);
  }
  &:active{
    transform:translateY(1.5px);
  }
`;

const AttachAssets = styled.div`
  display:flex;
  align-items:center;
  padding-right: 8px;
  ${AssetButton}{
    width:30px;
    cursor:pointer;
  }
`;

const ShareComment = styled.div`
  padding-left:8px;
  margin-right:auto;
  border-left: 1px solid rgba(0,0,0,0.35);
  ${AssetButton}{
    img{
      margin-right:5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius:20px;
  border:1px solid transparent;
  outline:none;
  padding:8px 26px;
  cursor:pointer;
  font-weight:650;
  font-size:16px;
  color:white;
  background: #0a66c2;
  &:hover{
    background-color:#004182;
  }
  &:active{
    transform:translateY(1.5px);
  }
`;

const Editor = styled.div`
  padding: 10px 5px;
  width:100%;
  textarea{
    margin:0 auto;
    width:91%;
    resize:none;
    min-height:150px;
    padding: 10px 12px;
    font-size:16px;
    outline:none;
    border:1px solid rgba(0,0,0,0.08);
    border-radius:10px;
  }
`;

export default PostModal;
