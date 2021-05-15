import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectCast } from '../features/cast/castSlice'



const CastContent = () => {
    const cast = useSelector(selectCast);
    console.log("this is cast", cast);
    return (
        <ContentDiv>
            <HeaderH1>
                <HeaderH>
                    <HeaderA href="">Cast</HeaderA>
                </HeaderH>
            </HeaderH1>
            <Div1>
                <DivTile>
                    <UlTile>
                        {cast &&
                            cast.map((casts) => (
                        <LiTile>
                            <Link to={'Detail'}>
                                <ATile>
                                    <ImgContainer>
                                        <ImgTag src={casts.img} alt />
                                    </ImgContainer>
                                    <DetailsDiv>
                                        <DetailsStrong>{casts.name}</DetailsStrong>
                                        <DetailsSmall>{casts.played_by}</DetailsSmall>
                                    </DetailsDiv>
                                </ATile>
                            </Link>
                        </LiTile>
                        ))
                        }
                    </UlTile>
                </DivTile>
            </Div1>
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

const Div1 = styled.div`
    @media (min-width: 961px) {
    width: 100%;
    display: block;
    margin: 0 auto;
    vertical-align: top;
    }
`;

const DivTile = styled.div`
    -webkit-font-smoothing: antialiased;
    @media (min-width: 961px) {
    margin-bottom: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    }
    @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 16px;
    }
`;

const UlTile = styled.ul`
    @media (min-width: 961px) {
    margin-left: -16px;
    }
    @media (max-width: 767px) {
    margin-left: -8px;
    }
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

const LiTile = styled.li`
    border-radius: 2px;
    display: inline-block;
    vertical-align: top;
    @media (min-width: 1025px) {
        transition: all 0.3s ease-in-out;
        &:hover{
            box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
        }
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    width: calc(33.333% - 16px);
    margin-left: 16px;
    margin-bottom: 16px; 
    }
    @media (max-width: 767px) {
    width: calc(50% - 8px);
    margin-left: 8px;
    margin-bottom: 8px;
    }
    @media (min-width: 961px) {
    width: calc(25% - 16px);
    margin-left: 16px;
    margin-bottom: 16px;
    }
`;

const ATile = styled.a`
    display: block;
    text-decoration: none;
`;

const ImgContainer = styled.div`
    padding-bottom: 60%;
    display: block;
    position: relative;
    color: #fff;
    overflow: hidden;
    height: 0;
`;

const ImgTag = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
    width: auto;
    transform: translate(-50%, -50%);
`;

const DetailsDiv = styled.div`
    background: #f8f8f8;
    font-size: 1em;
    display: block;
    @media (min-width: 961px) {
    height: 100px;
    padding: 6%;
    }
    @media (max-width: 767px) {
    height: 86px;
    padding: 4%;
    }
`;

const DetailsStrong = styled.strong`
    line-height: 1.4em;
    color: black;
    display: block;
`;

const DetailsSmall = styled.small`
    display: block;
    font-size: 0.75em;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    line-height: 1.2em;
    margin-top: 4px;
`;

export default CastContent
