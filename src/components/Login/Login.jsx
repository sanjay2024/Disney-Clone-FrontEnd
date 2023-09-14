import { styled } from 'styled-components'

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CtaLogo src="/images/cta-logo-one.svg" alt="ldsfnmgoaer" />
        <CtaButton>GET ALL THERE</CtaButton>
        <CtaPara>Subcribe Now And Start Streaming</CtaPara>
        <CtaLogo2
          src="/images/cta-logo-two.png"
          alt="ldsfnmgoaer"
        />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  background-image: url("/images/login-background.jpg");
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: -1;
`;
const Content=styled.div`
         position:relative;
         display:flex;
         justify-content:center;
         align-items:center;
         padding:80px 40px;
         min-height:calc(100vh - 77px);
         flex-direction:column;
         height:100%;
         width:100%;
         z-index: -1;
`
const CtaLogo = styled.img`
  position: relative;
  top: -20px;
  width: 800px;
  @media (max-width: 550px) {
    width: 350px;
  }
  @media((min-width: 550px) and (max-width: 850px)) {
    width: 430px;
  }
`;
const CtaButton = styled.a`
  font-family: "Inter", sans-serif;
  padding: 15px 280px;
  text-align: center;
  cursor: pointer;
  background-color: #0062ff;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  letter-spacing: 1.8px;
  border-radius: 5px;
  border: 1px solid transparent;
  @media (max-width: 550px) {
    padding: 15px 50px;
    font-size: 20px;
  }
  @media ((min-width: 550px) and (max-width: 850px)) {
    padding: 15px 100px;
    font-size: 20px;
  }
`;
 const CtaPara = styled.p`
   font-family: "Inter", sans-serif;
   color: hsla(0, 0%, 95.3%, 1);
   font-size: 1.5rem;
   position: relative;
   top: 10px;
   letter-spacing: 1px;
   @media (max-width: 550px) {
        position:relative;
        top:20px;
   }
 `;
 const CtaLogo2 = styled.img`
   position: relative;
   width: 850px;
   top: 30px;
   @media (max-width: 550px) {
     position: relative;
     top: 50px;
     width: 400px;
   }
   @media ((min-width:550px) and (max-width: 850px)) {
     width:500px;
   }
 `;
export default Login
