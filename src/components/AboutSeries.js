import React from 'react'
import styled from "styled-components";

const AboutSeries = () => {
    return (
        <DivContent>
            <DivArticle>
                <MainArticle>
                    <AboutH2>
                        About the Series
                    </AboutH2>
                    <AboutContainer>
                        <AboutP>
                            Bjorn Ironside has ambitions for the Kingdom of Kattegat,
                            he dreams of peace and prosperity,
                            but the fates have a different plan for the new King.
                            A threat is looming, an enemy is resurgent–so much more ruthless than the rest.
                            Lagertha too has dreams,
                            to bury her sword and return to the simple life.
                            But as enemy forces gather,
                            Bjorn and Lagertha will rise to the challenge,
                            because they are Viking heroes and can never surrender.
                        </AboutP>
                    </AboutContainer>
                </MainArticle>
            </DivArticle>
        </DivContent>
    )
}

const DivContent = styled.div`
    margin: 0 auto;
    max-width: 720px;
    @media (min-width: 768px) {
    max-width: 720px;
    }
    @media (max-width: 767px) {
    padding: 40px 0 0;
    margin: 0;
    width: 100%;
    }
`;

const DivArticle = styled.div`
    margin-top: 40px;
    @media (max-width: 767px) {
    margin: 0;
    padding: 0;
    margin-top: 0;
    }
`;

const MainArticle = styled.article`
    display: block;
    @media (min-width: 768px) {
    padding: 0 16px;
    margin-bottom: 40px;
    }
    @media (max-width: 767px) {
    padding: 0 16px;
    }
`;

const AboutH2 = styled.h2`
    
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    position: relative;
    padding-top: 7px;
    margin-bottom: 16px;
    text-transform: none;
    @media (max-width: 767px) {
    font-size: 17px;
    }
    &:focus{
        outline: none;
    }
    &:before {
    box-sizing: inherit;
    width: 24px;
    height: 4px;
    background-color: #ff124d;
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 12px);
    }
`;

const AboutContainer = styled.div`
    overflow: hidden;
    max-height: 150px;
    transition: max-height 0.85s ease-out;
    @media (max-width: 767px) {
    max-height: 150px;
    }
`;

const AboutP = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: normal;
    margin-bottom: 25px;
    @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 22px;
    }
`;

export default AboutSeries
