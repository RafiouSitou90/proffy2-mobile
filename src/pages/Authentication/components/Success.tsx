import React from "react"
import { Dimensions, ImageBackground } from "react-native"
import { MaterialIcons as Icon } from "@expo/vector-icons"
import { RectButton } from "react-native-gesture-handler"

import { Box, Text, useTheme } from "../../../theme"

import largeBackground from "../../../assets/images/large-background.png"

interface SuccessProps {
	title: string
	description: string
	buttonLabel: string
	onPress: () => void
}

const { height, width } = Dimensions.get("window")

const Success = ({
	title,
	description,
	buttonLabel,
	onPress,
}: SuccessProps) => {
	const theme = useTheme()

	return (
		<Box
			flex={1}
			backgroundColor={"primary"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<ImageBackground
				source={largeBackground}
				style={{
					width: width - width * 0.15,
					height: height - height * 0.1,
					alignItems: "center",
					justifyContent: "center",
				}}
				resizeMode="contain"
			>
				<Box
					flexDirection={"column"}
					justifyContent={"space-between"}
					alignItems={"center"}
					paddingHorizontal={"xs"}
				>
					<Box
						height={80}
						width={80}
						borderWidth={4}
						borderRadius={"l"}
						borderColor={"secondary"}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<Icon
							name={"check"}
							size={50}
							color={theme.colors.secondary}
						/>
					</Box>
					<Box marginTop={"l"}>
						<Text
							style={{
								fontFamily: "Archivo-Regular",
								fontWeight: "bold",
								fontSize: 32,
								lineHeight: 37,
								textAlign: "center",
								color: theme.colors.white,
							}}
						>
							{title}
						</Text>
					</Box>
					<Box marginTop={"s"}>
						<Text
							style={{
								fontFamily: "Poppins-Regular",
								fontWeight: "normal",
								fontSize: 14,
								lineHeight: 24,
								textAlign: "center",
								color: theme.colors.melRose,
							}}
						>
							{description}
						</Text>
					</Box>
				</Box>
			</ImageBackground>
			<Box
				justifyContent="center"
				alignItems="center"
				marginBottom="m"
				marginHorizontal={"l"}
			>
				<RectButton
					onPress={onPress}
					style={{
						width: width * 0.8,
						height: 56,
						borderRadius: theme.borderRadii.ms,
						backgroundColor: theme.colors.secondary,
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
							color: theme.colors.white,
						}}
					>
						{buttonLabel}
					</Text>
				</RectButton>
			</Box>
		</Box>
	)
}

export default Success
