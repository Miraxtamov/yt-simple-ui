import styled from "styled-components";

export const BodyContainer = styled.div`
	width: 100%;
	background-color: #181818;
`;
export const Container = styled.div`
	padding: 25px 24px;
	margin-left: auto;
	margin-right: auto;
`;

export const VideosContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 41px;
	column-gap: 16px;
`;

export const VideoCard = styled.div`
	display: flex;
	cursor: pointer;
	flex-direction: column;
  max-width: 360px;
  min-height: 100%;
`;

export const VideoPrevious = styled.img`
object-fit: cover;
	width: 100%;
	height: 142px;
`;

export const VideoPhotoTextContainer = styled.div`
	display: flex;
	align-items: flex-start;
	margin-top: 12px;
`;

export const AvatarChannel = styled.img`
	width: 36px;
	height: 36px;
  border-radius: 50%;
`;

export const VideoTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 12px;
`;

export const VideoTitle = styled.h4`
	font-weight: 400;
	font-size: 14px;
	line-height: 22px;
	color: #ffffff;
	margin-bottom: 4px;
`;


export const VideoChannelName = styled.p`
	color: rgba(255, 255, 255, 0.6);
	font-size: 12px;
	line-height: 18px;
`;

export const SeenDotWhenSet = styled.div`
	display: flex;
	align-items: center;
	color: rgba(255, 255, 255, 0.6);
	font-size: 12px;
	line-height: 18px;
`;

export const Seen = styled.div``;

export const Dot = styled.div`
	margin-left: 4px;
	margin-right: 4px;
`;

export const WhenSet = styled.div``;
