import styled from 'styled-components';

interface Props {
	justifyContent?: string,
	alignItem?: string,
	flexDir?: string,
	flexWrap?: string,
	margin?: string,
	pad?: string,
	width?: string,
	height?: string,
	textAlign?: string,
	bgColor?: string,
	gap?: string,
	flexB?: string,
	border?: string
	gridCol?: string
	gridRow?: string
	borderRadius?: string
	object?: string
}

export const Flex = styled.div<Props>`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent || 'center'};
	align-items: ${({ alignItem }) => alignItem || 'center'};
	flex-direction: ${({ flexDir }) => flexDir || 'row'};
	flex-wrap: ${({ flexWrap }) => flexWrap || 'no-wrap'};
	margin: ${({ margin }) => margin || '0'};
	padding: ${({ pad }) => pad || '0'};
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	text-align: ${({ textAlign }) => textAlign || 'initial'};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	border: ${({ border }) => border};
	gap: ${({ gap }) => gap};
	flex-basis: ${({ flexB }) => flexB};
	& > * {
		min-width: 0;
	}
`;

export const Container = styled.div<Props>`
	text-align: ${({ textAlign }) => textAlign || 'initial'};
	margin: ${({ margin }) => margin || '0'};
	padding: ${({ pad }) => pad || '0'};
	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '100%'};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	border: ${({ border }) => border};

	& > * {
		min-width: 0;
	}
`;

export const Grid = styled.div<Props>`
	display: grid;
	grid-template-columns: ${({ gridCol }) => gridCol || '1fr'};
	grid-template-rows: ${({ gridRow }) => gridRow || 'auto'};
	gap: ${({ gap }) => gap || '10px'};
	justify-content: ${({ justifyContent }) => justifyContent || 'center'};
	align-items: ${({ alignItem }) => alignItem || 'center'};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	border: ${({ border }) => border};
	width: ${({ width }) => width};
	padding: ${({ pad }) => pad || '0'};
	border-radius: ${({ borderRadius }) => borderRadius};
`;

export const Frame = styled.div<Props>`
	height: ${({ height }) => height || '30px'};
	min-height: ${({ height }) => height || '30px'};
	width: ${({ width }) => width || '30px'};
	min-width: ${({ width }) => width || '30px'};
	overflow: hidden;
	display: flex;
	margin: ${({ margin }) => margin || '0px'};
	padding: ${({ pad }) => pad || '0px'};
	background-color: ${({ bgColor }) => bgColor || 'transparent'};
	border: ${({ border }) => border};
	& > * {
		height: 100%;
		width: 100%;
		object-fit: ${({ object }) => object || 'contain'};
	}
`;
