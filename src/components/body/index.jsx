import React, {useContext} from "react";
import { Info } from "../../context";

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
} from "./style";


function Body() {
  const [cardData, setCardData] = useContext(Info);
	return (
			<Container>
				<VideosContainer>
					{cardData.map((value) => {
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
	);
}

export default Body;
