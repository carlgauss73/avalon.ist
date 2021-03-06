// External

import React from "react";

// Styles

import "../../styles/Utils/Slider.scss";

interface SliderProps {
	value: boolean;
	onClick: (...args: any[]) => void;
}

const Slider = (props: SliderProps) => {
	return (
		<label className="switch">
			<input
				readOnly
				checked={props.value}
				onClick={props.onClick}
				type="checkbox"
			/>
			<span className="slider"></span>
		</label>
	);
};

export default Slider;
