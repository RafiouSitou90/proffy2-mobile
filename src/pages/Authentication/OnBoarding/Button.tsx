import React from "react"
import { Image } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"

import arrowRight from "../../../assets/images/arrow-right.png"

interface ButtonProps {
	last?: boolean
	onPress: () => void
}

const Button = ({ onPress }: ButtonProps) => {
	return (
		<BorderlessButton
			{...{ onPress }}
			style={{
				justifyContent: "center",
				alignItems: "center",
				width: 74,
				height: 40,
			}}
		>
			<Image
				source={arrowRight}
				style={{
					width: 74,
					height: 40,
				}}
			/>
		</BorderlessButton>
	)
}

export default Button
