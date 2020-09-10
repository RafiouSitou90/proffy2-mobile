import React from "react"
import { Image, StyleSheet } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import arrowRight from "../../../assets/images/arrow-right.png"
import { Box, Text, useTheme } from "../../../theme"

interface SubSlideProps {
	label: string
	description: string
	last?: boolean
	onPress: () => void
}

const SubSlide = ({ label, description, last, onPress }: SubSlideProps) => {
	const theme = useTheme()
	return (
		<Box
			flex={1}
			padding="l"
			flexDirection="column"
			justifyContent="space-between"
			marginTop="l"
		>
			<Box>
				<Text style={styles.label}>{label}</Text>
			</Box>
			<Box width={208} marginTop="l">
				<Text style={styles.description}>{description}</Text>
			</Box>
		</Box>
	)
}

const styles = StyleSheet.create({
	label: {
		fontFamily: "Archivo-Regular",
		fontWeight: "500",
		fontSize: 40,
		lineHeight: 44,
		color: "#6A6180",
		opacity: 0.16,
	},
	description: {
		fontFamily: "Poppins-Regular",
		fontWeight: "500",
		fontSize: 24,
		lineHeight: 44,
		color: "#6A6180",
	},
})

export default SubSlide
