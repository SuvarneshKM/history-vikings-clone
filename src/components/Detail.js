import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';
import InternalNavCast from './InternalNavCast';


const Detail = () => {
    const { id } = useParams();
    const [casts, setCast] = useState()

    useEffect(() => {
        //grab the cast info from db
        db.collection("cast")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    //save the cast data
                    setCast(doc.data());
                } else {
                    //redirect to home page
                }
            })
    }, [])

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
            <HeaderH1>
                <HeaderH>
                    <HeaderA href="">Cast</HeaderA>
                </HeaderH>
            </HeaderH1>
            { casts && (
                <DivArt>
                    <div>
                        <ArtFigure>
                            <ArtImg src={casts.img} alt />
                        </ArtFigure>
                        <Articles>
                            <DetailHeader>
                                <h1>
                                    <Strongs>{casts.name}</Strongs>
                                    <Smalls>{casts.played_by}</Smalls>
                                </h1>
                            </DetailHeader>
                            <PS>{casts.details}</PS>
                        </Articles>
                    </div>
                </DivArt>
            )}

        </Container>
    )
}

const Container = styled.div`
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

const Articles = styled.article`
    display: block;
`;

const DetailHeader = styled.header`
    margin-bottom: 20px;
    font-size: 1.313em;
`;

const Strongs = styled.strong`
    text-transform: uppercase;
    vertical-align: middle;
    font-weight: 600;
`;

const Smalls = styled.small`
    margin-left: 5px;
    font-size: 0.762em;
    vertical-align: bottom;
    line-height: 1.1em;
`;

const PS = styled.p`
    margin-bottom: 20px;
    line-height: 1.55556em;
`;

const DivArt = styled.div`
    @media (min-width: 961px) {
    display: block;
    margin: 0 auto;
    vertical-align: top;
    width: calc(100% - 300px - 16px - 5px);
    }
`;

const ArtFigure = styled.figure`
    margin-bottom: 20px;
    display: block;
`;

const ArtImg = styled.img`
    width: 100%;
`;

export default Detail

