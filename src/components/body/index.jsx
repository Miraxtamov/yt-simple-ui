import React from "react";

import {
	AvatarChannel,
	Container,
	VideoCard,
	VideoPrevious,
	VideosContainer,
	VideoPhotoTextContainer,
	VideoTextContainer,
	VideoTitle,
	VideoChannelName,
	SeenDotWhenSet,
	Seen,
	Dot,
	WhenSet,
	BodyContainer,
} from "./style";

import { data } from "../../mock";

function Body() {
	return (
		<BodyContainer>
			<Container>
				<VideosContainer>
					{data.map((value) => {
						return (
							<VideoCard>
								<VideoPrevious src={value.previousImg} alt="Video Previous" />
								<VideoPhotoTextContainer>
									<AvatarChannel
										src={value.channelAvatar}
										alt="Channel Avatar"
									/>
									<VideoTextContainer>
											<VideoTitle>{value.title}</VideoTitle>
										<VideoChannelName>{value.channelName}</VideoChannelName>
										<SeenDotWhenSet>
											<Seen>{value.postSeen}</Seen>
											<Dot>•</Dot>
											<WhenSet>{value.postWhenSet}</WhenSet>
										</SeenDotWhenSet>
									</VideoTextContainer>
								</VideoPhotoTextContainer>
							</VideoCard>
						);
					})}
				</VideosContainer>
			</Container>
		</BodyContainer>
	);
}

export default Body;
