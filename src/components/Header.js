import { useEffect } from "react";
import styled from "styled-components"; 
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <NavDiv1></NavDiv1>
      <NavDiv2>
        <NavSpan></NavSpan>
        <Logo>
          <NavLogoSpan></NavLogoSpan>
        </Logo>
        </NavDiv2>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavUl>
            <NavLi>
              <NavA>Shows</NavA>
            </NavLi>
            <NavLi>
              <NavA>This Day In History</NavA>
            </NavLi>
            <NavLi>
              <NavA>Schedule</NavA>
            </NavLi>
            <NavLi>
              <NavA>Topics</NavA>
            </NavLi>
            <NavLi>
              <NavA>Stories</NavA>
            </NavLi>
          </NavUl>
          
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  )
}

const Nav = styled.header`
    display: block;
    z-index: 600;
    top: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    background-color: #12121a;
    box-shadow: 0 2px 4px 0 rgb(216 216 216 / 50%);
    background-color: rgba(155, 155, 155, 0.01);
    position: relative;

    @media (max-width: 767px) {
    padding: 0 2px 0 12px;
    z-index: 1001;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
    -ms-flex-pack: justify;
    }
    @media (min-width: 1281px) {
    padding: 0 46px 0 46px;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 0 20px;
    }
    @media (min-width: 961px) and (max-width: 1024px) {
    padding: 0 14px 0 24px;
    }
    @media (min-width: 768px) and (max-width: 960px) {
    padding: 0 2px 0 12px;
    }
`;

const NavDiv1 = styled.div`
@media (max-width: 767px) {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background: #000;
    z-index: 2002;
    padding: 0px 16px;
    text-align: right;
    height: 30px;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}
@media (min-width: 768px) {
    display: none !important;
    }
`;

const NavDiv2 = styled.div`
    z-index: 600;
    top: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
  position: relative;
`;

const NavSpan = styled.span`
    position: absolute;
    bottom: -50px;
    left: 0;
    color: black;
    font-weight: 600;
    padding: 12px;
    font-size: 14px;
    width: 150px;
    text-align: center;
    height: 0px;
    left: -9999px;
`;

const Logo = styled.a`
  padding-right: 32px;
  margin-right: 8px;
  display: flex;
  margin: 0;
  text-decoration: none;
  @media (min-width: 1025px) and (max-width: 1439px) {
    margin-right: 8px;
  }
  @media (min-width: 768px) and (max-width: 960px) {
    padding-right: 16px;
    margin-right: 8px;
}
  @media (max-width: 767px) {
    padding: 0;
    margin-right: 16px;
  }
`;

const NavLogoSpan = styled.span`
    background-image: url('/images/history.svg');
    text-indent: -9999px;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    display: block;
    height: 48px;
    margin-top: 8px;
    margin-bottom: 8px;
    @media (min-width: 1281px) {
    width: 64px;
    }
    @media (min-width: 768px) and (max-width: 1280px) {
    width: 56px;
    }
    @media (max-width: 767px) {
    width: 75px;
    height: 40px;
    }
`;

const NavUl = styled.ul`
    list-style: none;
    -webkit-flex-grow: 1;
    -moz-flex-grow: 1;
    flex-grow: 1;
    -ms-flex-positive: 1;
    @media (min-width: 1025px) {
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    -webkit-transition: opacity 0.1s ease-in-out, visibility 0 ease-in-out 0.1s;
    -moz-transition: opacity 0.1s ease-in-out, visibility 0 ease-in-out 0.1s;
    transition: opacity 0.1s ease-in-out, visibility 0 ease-in-out 0.1s;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 14px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    visibility: hidden;
    height: 0;
    }
    @media (max-width: 767px) {
    display: none;
    }
`;

const NavLi = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    @media (min-width: 1440px) {
    position: relative;
    padding: 0 20px;
    }
    @media (min-width: 1025px) {
    position: relative;
    padding: 0 6px;
    }
`;

const NavA = styled.a`
    color: #000;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 600;
    text-decoration: none;
    @media (min-width: 1440px) {
    padding: 0px 20px;
    position: relative;
    }
    @media (min-width: 1025px) {
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    color: #000;
    display: block;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    }
    @media (min-width: 1120px) and (max-width: 1439px) {
    padding: 8px 10px;
    letter-spacing: -0.02em;
    }
    @media (max-width: 1120px) and (min-width: 767px) {
    font-size: 14px;
    padding: 8px 5px;
    }
    &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: transparent;
    transition: all 0.4s ease-out 0.1s;
    }
`;


const Login = styled.a`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header