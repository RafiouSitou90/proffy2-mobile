import React from "react"
import { StyleSheet } from "react-native"
import { Box, Text } from "../../../theme"

interface SubSlideProps {
	subtitle: string
	description: string
	last?: boolean
	onPress: () => void
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlideProps) => {
	return (
		<Box style={styles.container}>
			<Text style={styles.subtitle}>{subtitle}</Text>
			<Text style={styles.description}>{description}</Text>
			{/*
			<Button
				label={last ? "Let's get started" : "Next"}
				variant={last ? "primary" : "default"}
				{...{ onPress }}
			/>*/}
		</Box>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 44,
	},
	subtitle: {
		marginBottom: 12,
		textAlign: "center",
	},
	description: {
		color: "#0C0D34",
		textAlign: "center",
		marginBottom: 40,
	},
})

export default SubSlide
