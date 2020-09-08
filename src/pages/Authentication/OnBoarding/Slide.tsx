import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { Box, Text } from "../../../theme"

const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.61 * height
export const BORDER_RADIUS = 75

interface SlideProps {
	label: string
	right?: boolean
}

const Slide = ({ label, right }: SlideProps) => {
	const transform = [
		{ translateY: (SLIDE_HEIGHT - 100) / 2 },
		{ translateX: right ? width / 2 - 50 : -width / 2 + 50 },
		{ rotate: right ? "-90deg" : "90deg" },
	]

	return (
		<Box style={styles.container}>
			<Box style={[styles.titleContainer, { transform }]}>
				<Text>{label}</Text>
			</Box>
		</Box>
	)
}

const styles = StyleSheet.create({
	container: {
		width,
	},
	titleContainer: {
		height: 100,
		justifyContent: "center",
	},
})

export default Slide
