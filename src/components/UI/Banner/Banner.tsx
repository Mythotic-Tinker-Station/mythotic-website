import * as React from "react";

interface BannerProps {
    imgsrc?: string;
    childern?: any
}

const Banner: React.FC<BannerProps> = props => {
	return <img src={props.imgsrc} alt='Insert logo here' />;
};

export default Banner;
