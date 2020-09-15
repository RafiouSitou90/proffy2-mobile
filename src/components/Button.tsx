import React from "react"
import { Dimensions } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import { Text, useTheme } from "../theme"

interface ButtonProps {
	label: string
	onPress: () => void
	enabled?: boolean | true
}

const { width } = Dimensions.get("window")

const Button = ({ enabled, label, onPress }: ButtonProps) => {
	const theme = useTheme()
	return (
		<RectButton
			enabled={enabled}
			onPress={onPress}
			style={{
				width: width * 0.85,
				height: 56,
				borderRadius: theme.borderRadii.ms,
				backgroundColor: enabled
					? theme.colors.secondary
					: theme.colors.mischka,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontFamily: "Archivo-Regular",
					fontWeight: "600",
					fontSize: 16,
					lineHeight: 26,
					textAlign: "center",
					color: enabled
						? theme.colors.white
						: theme.colors.santaGray,
				}}
			>
				{label}
			</Text>
		</RectButton>
	)
}

export default Button
