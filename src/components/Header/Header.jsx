import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import "../../components/Header/Header.scss";
import { styled } from "styled-components";
import { auth, provider } from '../../firebase'
import { signInWithPopup } from "firebase/auth";
import {userLogOut, userLogin,userLoginFailure} from "../../redux/User/userAction";
import { useEffect, useState} from "react";
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [profilePic,setprofilePic]=useState("");
  const handleAuth = () => {
    if (!userInfo){
      signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(userLogin(result.user));
        navigate('/home')
      })
      .catch((error) => dispatch(userLoginFailure(error)));
    }
    else if (userInfo) {
      localStorage.removeItem("userAuth");
      auth.signOut().then(()=>{
        dispatch(userLogOut());
        navigate('/')
      })
    }
  }
  const userInfo=useSelector(state=>state.userInfo);
  useEffect(() => {
      if (userInfo){
        setprofilePic(userInfo.photoURL);
      }
      else navigate("/")
  }, [userInfo,navigate]);
  return (
    <>
      <div className="navbar">
        <img id="navImg" src="/images/logo.svg" alt="disneyLogo" />
        {!userInfo ? (
          <Login onClick={handleAuth}>Log In</Login>
        ) : (
          <>
            <div className="navMenu">
              <Link to="/home" className="navItem">
                <img
                  id="navItemImg"
                  src="/images/home-icon.svg"
                  alt="home-logo"
                />
                <span>HOME</span>
              </Link>
              <Link className="navItem">
                <img
                  id="navItemImg"
                  src="/images/movie-icon.svg"
                  alt="movie-logo"
                />
                <span>MOVIES</span>
              </Link>
              <Link className="navItem">
                <img
                  id="navItemImg"
                  src="/images/series-icon.svg"
                  alt="series-logo"
                />
                <span>SERIES</span>
              </Link>
              <Link to="/search" className="navItem">
                <img
                  id="navItemImg"
                  src="/images/search-icon.svg"
                  alt="SEARCH-logo"
                />
                <span>SEARCH</span>
              </Link>
            </div>
            <ProfileContainer>
              <img src={profilePic} alt="profilePic" />
              <DropDown to="/" replace onClick={handleAuth}>Log Out</DropDown>
            </ProfileContainer>
          </>
        )}
      </div>
    </>
  );
};
const DropDown = styled(Link)`
  position: absolute;
  top:60px;
  right: 40px;
  border: 3px solid rgba(249, 249, 249, 0.2);
  background-color: #0a0d1d;
  padding:10px 30px;
  border-radius:5px;
  display:none;
  text-decoration:none;
`;
const ProfileContainer = styled.div`
    cursor: pointer;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding:10px;
    img {
      width: 50px;
      border-radius: 50%;
    }
    @media (max-width: 1120px) {
      justify-content: flex-end;
    }
    &:hover{
        ${DropDown}{
          display:block;
          transition-duration:2s;
        }
    }
`;
const Login = styled(Link)`
  font-family: "Inter", sans-serif;
  background-color: inherit;
  border: 3px solid rgba(249, 249, 249, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  text-align: center;
  font-weight: bolder;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration:none;
  color:inherit;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transform: scale(1.05);
  }
`;
export default Header;
