import React from 'react';
import styled from 'styled-components';

export const BottomNavigation = () => {
	return (
		<>
			<Wrapper>
				<Inner>hello</Inner>
			</Wrapper>
		</>
	);
};

const Inner = styled.div`
	width: 500px;
	background-color: rgba(0, 0, 0, 0.5);
	height: 50px;
	margin-inline: auto;
	border-radius: 30px;
`;

const Wrapper = styled.div`
	position: fixed;
	bottom: 1rem;
	right: 0;
	left: 0;
`;
