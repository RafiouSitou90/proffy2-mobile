import React from "react"
import { Dimensions, StyleSheet } from "react-native"
import { Box, Text } from "../../../theme"
import Button from "./Button"

interface SubSlideProps {
	label: string
	description: string
	last?: boolean
	onPress: () => void
}

const { width, height } = Dimensions.get("window")

const SubSlide = ({ label, description, onPress }: SubSlideProps) => {
	return (
		<Box
			flex={1}
			padding="l"
			flexDirection="column"
			justifyContent="space-between"
			marginTop="l"
		>
			<Box flexDirection="column" justifyContent="space-between">
				<Box>
					<Text style={styles.label}>{label}</Text>
				</Box>
				<Box width={208} marginTop="l">
					<Text style={styles.description}>{description}</Text>
				</Box>
			</Box>

			<Box
				style={{
					bottom: 0,
					right: 0,
					position: "absolute",
					marginBottom: -height * 0.096,
					marginRight: width * 0.1,
				}}
			>
				<Button {...{ onPress }} />
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
