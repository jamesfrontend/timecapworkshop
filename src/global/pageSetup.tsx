import React, { useEffect } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

export const PageSetup: React.FC = ({ children }) => {
    const [lineHeight, setLineHeight] = useState('100vh');
    const [nameOpacity, setNameOpacity] = useState('0');
    const [logoPosition, setLogoPosition] = useState('-110px');

    useEffect(() => {
        setLogoPosition('50px');
        setTimeout(() => setLineHeight('0'), 200);
        setTimeout(() => setNameOpacity('1'), 600);
    }, []);
    return (
        <>
            <Wrapper>
                <LogoWrapper top={logoPosition}>
                    <Image
                        layout="fixed"
                        src="/logo.svg"
                        width={100}
                        height={100}
                        alt="logo"
                    />
                </LogoWrapper>
                <NameWrapper opacity={nameOpacity}>
                    <Image
                        layout="fixed"
                        src="/name.svg"
                        width={150}
                        height={100}
                        alt="logo"
                    />
                </NameWrapper>
                <VerticalLines lineHeight={lineHeight} />
                <>{children}</>
            </Wrapper>
        </>
    );
};

type NameType = {
    opacity: string | number;
};
const NameWrapper = styled.div<NameType>`
    position: absolute;
    left: 100px;
    top: 200px;
    transform: translateX(-50%) rotate(-90deg);
    opacity: ${({ opacity }) => opacity};
    transition: opacity 500ms ease;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        transform: rotate(0deg);
        top: 50px;
        left: 50%;
    }
`;

type LogoType = {
    top: string | number;
};
const LogoWrapper = styled.div<LogoType>`
    position: fixed;
    left: 90px;
    transform: translateX(-50%);
    z-index: 1;
    top: ${({ top }) => top};
    background-color: white;
    transition: top 800ms;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        left: 60px;
    }
`;

type VertType = {
    lineHeight: string | number;
};

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const VerticalLines = styled.div<VertType>`
    width: 1px;
    position: fixed;
    background-color: rgb(196 196 196 / 40%);
    box-shadow: 1px 0px 4px 0px #e0e0e0;
    top: 0;
    bottom: ${({ lineHeight }) => lineHeight};
    left: 105px;
    transition: bottom 700ms ease-in;

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        left: 70px;
        height: 1px;
        width: 100vw;
        top: 107px;
        animation: ${fadeIn} 800ms linear;
    }
`;

const Wrapper = styled.div`
    font-size: 16px;
    background: linear-gradient(346deg, #f9f8f9 1%, transparent 1%) 1px 0, #fff;
    background-size: 320px 1px;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;

    button {
        font-family: inherit;
        font-weight: 500;
        letter-spacing: 1px;
    }

    p:not(:first-child) {
        padding-block-start: 0.625rem;
    }

    .bold {
        font-weight: 700;
    }
`;
