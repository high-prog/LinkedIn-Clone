import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
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
              <button
                disabled={props.loading ? true : false}
                onClick={(e) => handleClick(e)}
              >
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>
              <button
                disabled={props.loading ? true : false}
                onClick={(e) => handleClick(e)}
              >
                <img src="/images/video-icon.svg" alt="" />
                <span>video</span>
              </button>
              <button
                disabled={props.loading ? true : false}
                onClick={(e) => handleClick(e)}
              >
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>
              <button
                disabled={props.loading ? true : false}
                onClick={(e) => handleClick(e)}
              >
                <img src="/images/article-icon.svg" alt="" />
                <span>Write Article</span>
              </button>
            </div>
          </ShareBox>
          
          {props.articles.length === 0 ? (
        <p>Nothing to show. Post Something!</p>
      ) : (
          <Content>
            {props.loading && <img src="./images/loading-icon.svg" />}

            {props.articles.length > 0 &&
              props.articles.map((article, key) => {
                return (
                  <Article key={key}>
                    <SharedActor>
                      <a>
                        <img src={article.actor.image} alt="" />
                        <div>
                          <span>{article.actor.title}</span>
                          <span>{article.actor.description}</span>
                          <span>
                            {new Date(
                              article.actor.date.seconds * 1000
                            ).toLocaleString()}
                          </span>
                        </div>
                      </a>
                      <button>
                        <img src="/images/ellipsis.svg" width="20px" alt="" />
                      </button>
                    </SharedActor>
                    <Description>{article.description}</Description>
                    <SharedImage>
                      <a>
                        {article.sharedImg === '' ? (
                          <ReactPlayer width={'100%'} url={article.video} />
                        ) : (
                          <img src={article.sharedImg} alt="" />
                        )}
                      </a>
                    </SharedImage>
                    <SocialCounts>
                      <li>
                        <button>
                          <img
                            src="/images/like-icon.svg"
                            alt=""
                            
                          />
                          <img
                            src="/images/clap-icon.svg"
                            alt=""
                            
                          />
                          <span>75</span>
                        </button>
                      </li>
                      <li>
                        <a>{article.comments} comments</a>
                      </li>
                    </SocialCounts>
                    <SocialActions>
                      <button>
                        <img
                          src="/images/like-icon.svg"
                          
                          alt=""
                        />
                        <span>Like</span>
                      </button>
                      <button>
                        <img
                          src="/images/comment-icon.svg"
                          alt=""
                          
                        />
                        <span>Comments</span>
                      </button>
                      <button>
                        <img
                          src="/images/share-icon.svg"
                          alt=""
                          
                        />
                        <span>Share</span>
                      </button>
                      <button>
                        <img
                          src="/images/send-icon.svg"
                          alt=""
                          
                        />
                        <span>Send</span>
                      </button>
                    </SocialActions>
                  </Article>
                );
              })}
          </Content>
          )}
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      
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
align-items:center;
overflow:hidden;
height: 40px;
border-bottom: 1px solid #e9e5df;
list-style:none;
li{
  border:none;
  height: 100%;
  font-size:12px;
  display:flex;
  align-items:center;
  justfy-content:center;
  flex-grow:1;
  
  a{
    font-size:12px;
    font-weight:600;
    width:100%;
    text-align:center;
  }
  button{
    font-size:13px;
    font-weight:600;
    border:none;
    dispaly:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
    background-color:white;
    img{
      width:20px;
      margin-right:5px;
    }

  }
}
&:first-child{
  
    border-right:1px solid rgba(0,0,0,0.38);

}
`;

const SocialActions = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  min-height:40px;
  padding:0;
  
  button{
    display:flex;
    height:100%;
    align-items:center;
    padding:5px 10px;
    color:#0a66c2;
    border-right:1px solid rgba(0,0,0,0.08);
    background-color:white;
    justify-content:center;
    align-items:center;
    img{
      width:20px;
    }

    @media (min-width:768px){
      span{
        margin-left:8px;
      }
      button{
        padding: 5px 90px;
        img{
          width:30px;
        }
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
