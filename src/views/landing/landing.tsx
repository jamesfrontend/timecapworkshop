import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LandingView = () => {
	const [faceOpacity, setFaceOpacity] = useState('0');
	const [centerOpacity, setCenterOpacity] = useState('0');
	useEffect(() => {
		setTimeout(() => setFaceOpacity('1'), 900);
		setTimeout(() => setFaceOpacity('0.5'), 1800);
		setTimeout(() => setCenterOpacity('1'), 1300);
	}, []);

	return (
		<>
			<CurrentWrapper opacity={centerOpacity}>
				<Header>
					Current Project: Subliminal
					Stimuli
				</Header>
				<SSWrapper
					href='https://subliminal-stimuli-eight.vercel.app'
					rel='noreferrer'
					target='_blank'
				>
					<Image
						src='/screenshot-ss.png'
						width={500}
						height={500}
						layout='responsive'
						alt='current project'
					/>
				</SSWrapper>
			</CurrentWrapper>
			<Wrapper opacity={faceOpacity}>
				<Image
					src='/face.svg'
					width={500}
					height={500}
					layout='responsive'
					alt='face illustration'
				/>
			</Wrapper>
		</>
	);
};

export default LandingView;
const SSWrapper = styled.a`
	box-shadow: 0 0 16px 1px #c3c3c3ba;
	border-radius: 10px;
	overflow: hidden;
	transition: box-shadow 110ms;

	&:hover,
	&:focus {
		box-shadow: 0 0 16px 10px #c3c3c3ba;
	}
`;

const Header = styled.span`
	font-size: 20px;
	line-height: 1.25em;
	height: 30px;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		font-size: 16px;
		height: auto;
	}

	@media only screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
		font-size: 16px;
		height: auto;
	}
`;
const CurrentWrapper = styled.div<opacityType>`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: 530px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -60%);
	z-index: 10;
	opacity: ${({ opacity }) => opacity};
	transition: 900ms ease;

	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		width: 70vw;
		height: unset;
	}

	@media only screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
		height: auto;
		width: unset;
	}
`;

type opacityType = {
	opacity: string | number;
};
const Wrapper = styled.div<opacityType>`
	width: 40vw;
	position: fixed;
	bottom: 0;
	right: 0;
	opacity: ${({ opacity }) => opacity};
	transition: 800ms ease;
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		width: 70vw;
	}
`;
