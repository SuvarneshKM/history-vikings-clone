import styled from "styled-components";
import React from 'react'

const InternalNav = () => {
    return (
        <NavSection>
            <Nav>
                <NavUl>
                    <NavLi>
                        <NavA className='selected'>
                        <NavSpan>about</NavSpan>
                        </NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>
                        <NavSpan>Episodes</NavSpan>
                        </NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>
                        <NavSpan>Cast</NavSpan>
                        </NavA>
                    </NavLi>
                    <NavLi>
                        <NavA>
                        <NavSpan>Photos</NavSpan>
                        </NavA>
                    </NavLi>
                </NavUl>
            </Nav>
        </NavSection>
    )
}

const NavSection = styled.section`
    background: #f6f6f6;
    border-top: 3px solid #fff;  
    z-index: 105;
    position: sticky;
    top: 0;
    padding-bottom: 1px;
    display: block;
`;

const Nav = styled.nav`
    padding: 0 16px;
    margin: 0 auto;
    width: 100%;
    display: block;
`;

const NavUl = styled.ul`
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 720px;
    list-style: none;
    -webkit-box-align: center;
    align-items: center;
`;

const NavLi = styled.li`
    margin-right: 32px;
    position: relative;
    @media (max-width: 767px) {
    margin-right: 0;
    position: relative;
}
`;

const NavA = styled.a`
    background-color: transparent;
    font-weight: 600;
    max-width: 200px;
    height: 68px;
    padding: 0 16px;
    text-transform: capitalize;
    text-align: center;
    font-size: 16px;
    line-height: 1.5em;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    transition: all 0.5s ease-out;
    text-decoration: none;
    @media (max-width: 767px) {
    font-size: 14px;
    height: 58px;
    padding: 0 8px;
    }
    @media (max-width: 320px) {
    font-size: 12px;
    }
   
`;

const NavSpan = styled.span`

`;

export default InternalNav
