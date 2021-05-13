import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

const InternalNavCast = () => {
    return (
        <NavSection>
            <Nav>
                <NavUl>
                    <NavLi>
                        <Link to={'Home'}>
                            <NavA>
                                <NavSpan>about</NavSpan>
                            </NavA>
                        </Link>
                    </NavLi>
                    <NavLi>
                        <NavA>
                            <NavSpan>Episodes</NavSpan>
                        </NavA>
                    </NavLi>
                    <NavLi>
                        <NavA className='selected'>
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
    @media (max-width: 767px) {
    margin-right: 0;
    position: relative; 
    }
    position: relative;
`;

const NavA = styled.a`
    &.selected {
    background-color: transparent;
    font-weight: 600;
    color: #eb0028;
    pointer-events: none;
    &::after{
    width: 30px;
    height: 4px;
    background-color: #ff124d;
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-out;
    box-sizing: inherit;
    }
    }

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
    cursor: pointer;
    &:after {
    width: 0;
    height: 4px;
    background-color: #ff124d;
    content: '';
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-out;
    box-sizing: inherit;
    }
    &:hover:after {
        width: 30px;
    }
    


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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 2.4em;
    overflow: hidden;
    color: #000;
`;

export default InternalNavCast
