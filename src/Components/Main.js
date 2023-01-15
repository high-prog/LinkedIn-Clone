import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PostModal from './PostModal';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';

const Main = (props) => {
  const [showModal, setShowModal] = useState('close');

  useEffect(() => {
    props.getArticle();
  }, []);

  function handleClick(e) {
    e.preventDefault();
    // if (e.target !== e.currentTarget) {
    //   return;
    // }
    switch (showModal) {
      case 'open':
        setShowModal('close');
        break;
      case 'close':
        setShowModal('open');
        break;
      default:
        setShowModal('close');
        break;
    }
  }

  return (
    <>
      {props.articles.length === 0 ? (
        <p>Nothing to show. Post Something!</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                disabled={props.loading ? true : false}
                onClick={(e) => handleClick(e)}
              >
                Start a post
              </button>
            </div>
            <div>
              <button onClick={(e) => handleClick(e)}>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>
              <button onClick={(e) => handleClick(e)}>
                <img src="/images/video-icon.svg" alt="" />
                <span>video</span>
              </button>
              <button onClick={(e) => handleClick(e)}>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>
              <button onClick={(e) => handleClick(e)}>
                <img src="/images/article-icon.svg" alt="" />
                <span>Write Article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/loading-icon.svg" />}

            <Article>
              <SharedActor>
                <a>
                  <img src="/images/user.svg" alt="" />
                  <div>
                    <span>Title</span>
                    <span>Info</span>
                    <span>Date</span>
                  </div>
                </a>
                <button>
                  <img src="/images/ellipsis.svg" width="20px" alt="" />
                </button>
              </SharedActor>
              <Description>Text Description</Description>
              <SharedImage>
                <a>
                  <img
                    src="https://raw.githubusercontent.com/high-prog/LinkedIn-Clone/main/public/images/shared-image.jpg"
                    alt=""
                  />
                </a>
              </SharedImage>
              <SocialCounts>
                <li>
                  <button>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4102/4102964.png"
                      alt=""
                      width="20px"
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5976/5976435.png"
                      alt=""
                      width="18px"
                    />
                    <span>75</span>
                  </button>
                </li>
                <li>
                  <a>2 comments</a>
                </li>
              </SocialCounts>
              <SocialActions>
                <button>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnnVNTBrB7KwfJcgs06HWpY_nw-XNdon_2g&usqp=CAU"
                    width="35px"
                    alt=""
                  />
                  <span>Like</span>
                </button>
                <button>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3EiUayWY98MAIcutvVCH6Y8hXSaW50iZeQ&usqp=CAU"
                    alt=""
                    width="20px"
                  />
                  <span>Comments</span>
                </button>
                <button>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOW7OOigYasSiDcBEHqWDljb7HBkL8vTsOw&usqp=CAU"
                    alt=""
                    width="35px"
                  />
                  <span>Share</span>
                </button>
                <button>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkN_IUHplq3hgC6Yj1DVQAaT24dVCny1PdRQ&usqp=CAU"
                    alt=""
                    width="30px"
                  />
                  <span>Send</span>
                </button>
              </SocialActions>
            </Article>
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
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
    }
    
  }

  &:first-child{
    display:flex;
    margin:10px auto;
    align-items:center;
    justify-content:center;
    padding:4px 8px;
    width: 90%;
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
      &:hover{
        background:rgba(0,0,0,0.08);
      }
    }
  }
 &:nth-child(2){
   padding:-bottom:4px;
   button{
     img{
       margin:0 4px 0 -2px;
       opacity:0.8;
     }
     span{
      color:#70b5f9;
      &:hover{
        color: rgba(0,0,0,0.88);
      }
     }
   }
 }
}
`;

const Article = styled(CommonCard)`
  padding:0;
  overflow:visible;
  margin : 0;
`;

const SharedActor = styled.div`
padding-right:40px;
flex-wrap:nowrap;
padding: 12px 26px 0;
margin-bottom:8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display:flex;
  text-decoration:none;

  img{
    width:48px;
    height:48px;

  }
  & > div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-size:14px;
        font-weight:700;
        color:rgba(0,0,0,1);
      }

      &:nth-child(n + 1){
        font-size:12px;
        color:rgba(0,0,0,0.6);
      }
    }
  }
}


button{
  position:absolute;
  right:12px;
  top:0;
  background:transparent;
  border:none;
  outline:none;
  cursor:pointer;
}



`;

const Description = styled.div`
padding: 0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;
`;

const SharedImage = styled.div`
margin-top:8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;
img{
  object-fit:contain;
  width:100%;
  height:100%;
}
`;

const SocialCounts = styled.ul`
line-height:1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style:none;
li{
  margin-right:5px;
  font-size:12px;
  button{
    dispaly:flex;

  }
}
`;

const SocialActions = styled.div`
  align-items:center;
  display:flex;
  justify-content:flex-start;
  margin:0;
  min-height:40px;
  padding:4px 8px;
  button{
    display:inline-flex;
    align-items:center;
    padding:4px;
    color:#0a66c2;


    @media (min-width:768px){
      span{
        margin-left:8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img{
    width:50px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticle: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
