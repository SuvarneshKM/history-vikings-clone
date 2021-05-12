import React, { useEffect } from 'react';
import styled from 'styled-components';
import db from '../firebase';
import InternalNav from './InternalNav';
import AboutSeries from './AboutSeries';
import InternalNavCast from './InternalNavCast';

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


const ImgDiv = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
    min-height: 500px;
    position: relative;
    min-height: 500px;
    @media (max-width: 767px) {
    height: 360px;
    min-height: auto;
    }
    @media (min-width: 1025px) {
    height: 64vh;
    }
    @media (min-width: 1600px) {
    height: 72vh;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    height: 360px;
}
    `;

const ImgHome = styled.img`
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: top center;
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

const HeroUl = styled.ul`
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
    margin-top: 24px;
    padding: 8px 0 0 0;
    width: 440px;
    border-top: 1px solid rgba(79, 79, 79, 0.4);
    list-style: none;
    border-top: none;
    @media (max-width: 767px) {
    margin-top: 16px;
    width: calc(100% - 40px);
}
`;

const HeroLi = styled.li`
    height: 37px;
    padding: 0px 16px 0px 17px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    @media (max-width: 767px) {
    font-size: 12px;
}
`;

const HeroA = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease-out;
    color: black;
    text-decoration: none;
    &:hover {
    opacity: 0.6;
}
`;

const HeroSpan = styled.span`
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-weight: 600;
    padding-bottom: 4px;
    @media (max-width: 767px) {
    font-size: 14px;
}
`;

export default Cast

