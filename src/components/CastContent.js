import React from 'react'
import styled from 'styled-components'

const CastContent = () => {
    return (
        <ContentDiv>
            <HeaderH1>
                <HeaderH>
                    <HeaderA href="">Cast</HeaderA>
                </HeaderH>
            </HeaderH1>
        </ContentDiv>
    )
} 

const ContentDiv = styled.div`
    text-align: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 60px 0px;
    width: 95%;
    @media (max-width: 767px) {
    width: 95%;
    margin: 20px auto;
    font-size: 14px;
    }
`;

const HeaderH1 = styled.header`
    display: block;
    @media (min-width: 768px) {
    margin-bottom: 20px;
    }
    @media (max-width: 767px) {
    margin-bottom: 8px;
    }
`;

const HeaderH = styled.h1`

`;

const HeaderA = styled.a`
    text-decoration: none;
    color: black;
`;

export default CastContent
