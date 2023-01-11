import styled from 'styled-components';
import React from 'react';

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="Home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="Network" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="Job" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="notifiaction" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a> 
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" className="arrow"/>
              </a>
            </User>
            <Work>
              <a >
                <img src="/images/nav-work.svg" alt=""/>
                <span>Work
                <img src="/images/down-icon.svg" alt=""/>
                  
                </span>

              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};







const NavListWrap = styled.ul`
  display:flex;
  flex-wrap:no-wrap;
  list-style:none;

  .active{
    span:after{
      content:'';
      transform:scaleX(1);
      border-bottom: 2px solid var(--white,#fff);
      bottom:0;
      left:0;
      position:absolute;
      transition: transform.2s ease-in-out;
      width:100%;
      border-color:rgba(0,0,0,0.9);
    }
  }

`;

const NavList = styled.li`
  display:flex;
  align-items:center;
  a{
    display:flex;
    align-items:center;
    background:transparent;
    flex-direction:column;
    font-size:12px;
    font-weight:400;
    justify-content:center;
    line-height:1.5;
    min-height:42px;
    min-width:80px;
    text-decoration:none;
    position:relative;
    cursor:pointer;
    span {
      color: rgba(0,0,0,0.6);
      display:flex;
      align-items:center;
    }
    @media (max-width:768px){
      min-width:70px;
    }
  }

  &:hover,
  &:active{
    a{
      span{
        color:rgba(0,0,0,0.9);
      }
    }
  }


`;


const User = styled(NavList)`
  a > img{
    width:24px;
    border-radius:50%;
    height:24px;
  }
  a > svg{
    width:24px;
    border-radius:50%;
  }

  span{
    display:flex;
    align-items:center;
  }

  .arrow{
    width:10px;
    height:10px;
  }
`;
const Work = styled(User)`
border-left:1px solid rgba(0,0,0,0.08);
`;

const Nav = styled.nav`
margin-left:auto;
display:block;

@media (max-width: 768px){
  position:fixed;
  left:0;
  bottom:0;
  background:white;
  width:100%;
}


`;

const Search = styled.div`
  opacity:1;
  flex-grow:1;
  position:relative;
  & > div{
    max-width:280px;
    input {
      outline:none;
      border:none;
      box-shadow: none;
      background-color:#eef3f8;
      border-radius:2px;
      color: rgba(0,0,0,0.9);
      width:218px;
      padding: 0 8px 0 40px;
      line-height:1.75;
      font-size:14px;
      font-weight:400;
      height:34px;
      border-color:#dce6f1;
      vertical-align:text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width:40px;
  position:absolute;
  z-index:1;
  top:10px;
  left:2px;
  border-radius:0 2px 2px 0;
  margin:0;
  pointer-events:none;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size:0px;
`;

const Content = styled.div`
display:flex;
align-items:center;
margin: 0 auto;
min-height: 100%;
max-width:1128px;

`;

const Container = styled.div`
position:absolute;
background-color: white;
border-bottom: 1px solid rgba(0,0,0,0.08);
left:0;
padding:1px 24px;
top:0;
width:100vw;
z-index:100;


`;
export default Header;
