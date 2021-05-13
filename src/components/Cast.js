import React from 'react';
import styled from 'styled-components';
import InternalNavCast from './InternalNavCast';
import CastContent from './CastContent';

function Cast() {

    return (
        <Container>
            <HeroDiv>
                <HeroTextDiv>
                    <HeroH1>Vikings</HeroH1>
                    <HeroStrong>New Season Saturday, June 5 at 8/7c</HeroStrong>
                    <HeroStrong />
                </HeroTextDiv>
            </HeroDiv>
            <InternalNavCast />
            <CastContent />
        </Container>
    )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 0px;
  &:after {
    background-color: #000 
      no-repeat fixed;
    content: "";
    position: absolute;
    opacity: 1;
    z-index: -1;
  }
`;

const HeroDiv = styled.div`

`;


const HeroTextDiv = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    box-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    -o-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    -o-align-items: center;
    align-items: center;
    -ms-flex-align: center;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    flex-direction: column;
    -ms-flex-direction: column;
    min-height: 140px;
    padding: 16px 0;
    background: #fafafa;
    padding-bottom: 24px;
    @media (max-width: 767px) {
    min-height: 120px;
    padding: 16px 0;
}
`;

const HeroH1 = styled.h1`
    font-size: 29px;
    line-height: 1.2em;
    max-width: 720px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 767px) {
    font-size: 21px;
}
`;

const HeroStrong = styled.strong`
    max-width: 720px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    @media (max-width: 767px) {
    font-size: 14px;
    max-width: 320px;
    margin-top: 6px;
}
`;


export default Cast

