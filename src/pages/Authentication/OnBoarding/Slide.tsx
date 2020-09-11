import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { Box, Text } from "../../../theme"

const { width } = Dimensions.get("window")

interface SlideProps {}

const Slide = ({}: SlideProps) => {
	return (
		<Box style={styles.container}>
			<Text>{""}</Text>
		</Box>
	)
}

const styles = StyleSheet.create({
	container: {
		width,
	},
})

export default Slide
