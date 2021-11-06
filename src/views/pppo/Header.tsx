import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import SendIcon from '@material-ui/icons/Send';

const PPPOHeader = () => {
    return (
        <Header>
            <ImageWrapper>
                <Image
                    src="/pp-logo.png"
                    alt="pp logo"
                    width={144}
                    height={50}
                />
            </ImageWrapper>
            <ActionRight>
                <a
                    href="https://www.amazon.com/gp/product/B091V7L76G/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="/amazon-button3.png" alt="amazon-button" />
                </a>
                <MailButton href="mailto:sales@pocketplace.com">
                    <SendIcon />
                    sales@pocketplace.com
                </MailButton>
            </ActionRight>
        </Header>
    );
};

export default PPPOHeader;

const ActionRight = styled.div`
    display: flex;
    a {
        margin-right: 3rem;
        img {
            height: 100%;
        }
    }
`;

const MailButton = styled.a`
    color: #0d3054;
    text-decoration: none;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 15px 20px;
    border-radius: 40px;
    border: 1px solid #0d3054;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    svg {
        margin-right: 1rem;
    }
    &:hover,
    &:focus {
        background-color: #0d3054;
        color: white;
    }
`;

const Header = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    height: 70px;
    overflow: hidden;
    align-items: center;
    box-shadow: 0 1px 8px 0px rgba(0, 0, 0, 0.3);
    padding-inline: 2rem;
    justify-content: space-between;
    z-index: 1;
    background-color: #ffffff;
`;

const ImageWrapper = styled.a`
    width: fit-content;
    cursor: pointer;
`;
