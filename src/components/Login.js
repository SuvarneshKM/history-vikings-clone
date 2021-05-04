import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <VikingsLogo src="/images/vikings.png" alt="" />
          <Description>
            Ragnar Lothbrok, a legendary Norse hero, 
            is a mere farmer who rises up to become a 
            fearless warrior and commander of the Viking 
            tribes with the support of his equally ferocious family.
          </Description>
        </CTA>
        <BgImage />
      </Content>
      <HistoryLogo src="/images/history.svg" alt="" />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 10, 0.80), rgba(0, 0, 10, 0.80)), url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HistoryLogo = styled.img`
position: absolute;
right: 2px;
bottom: 2px;
max-width: 75px;
width: 100%;
`;

const Description = styled.p`
  color: #fff;
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const VikingsLogo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
