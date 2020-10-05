import { Feather as Icon } from "@expo/vector-icons"
import React from "react"
import { Dimensions, Image, ImageBackground, TextInput } from "react-native"
import { BorderlessButton, RectButton } from "react-native-gesture-handler"

import backIcon from "../../../assets/images/icons/back.png"
import logo from "../../../assets/images/logo.png"
import bgImage_3 from "../../../assets/images/bgImage_3.png"

import { Box, Text, useTheme } from "../../../theme"

const { height, width } = Dimensions.get("window")

const Profile = () => {
	const theme = useTheme()
	return (
		<Box flex={1} backgroundColor="grayBackground">
			<Box
				height={height * 0.13}
				padding={"m"}
				backgroundColor={"mediumPurple"}
				justifyContent={"center"}
				borderBottomWidth={1}
				borderBottomColor={"darkPurple"}
			>
				<Box
					flexDirection={"row"}
					justifyContent={"space-between"}
					paddingTop={"l"}
				>
					<Box height={30} width={30}>
						<BorderlessButton
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image source={backIcon} resizeMode="contain" />
						</BorderlessButton>
					</Box>

					<Box justifyContent={"center"} alignItems={"center"}>
						<Text
							style={{
								fontFamily: "Archivo-Regular",
								fontWeight: "500",
								fontSize: 14,
								lineHeight: 15,
								textAlign: "center",
								color: theme.colors.melRose,
							}}
						>
							Profile
						</Text>
					</Box>
					<Box justifyContent={"center"} alignItems={"center"}>
						<Image source={logo} resizeMode="contain" />
					</Box>
				</Box>
			</Box>

			<Box
				height={height * 0.5}
				backgroundColor={"primary"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<ImageBackground
					source={bgImage_3}
					style={{
						width: width * 0.7,
						height: width * 0.7,
						alignItems: "center",
						justifyContent: "center",
					}}
					resizeMode="contain"
				>
					<Box>
						<Image
							source={{
								uri:
									"https://avatars3.githubusercontent.com/u/39632507?s=460&u=b5f5e665e6b249f4202b50f622e4df6260331624&v=4",
							}}
							style={{
								width: 140,
								height: 140,
								borderRadius: 70,
							}}
						/>
						<Box position={"absolute"} right={0} bottom={0}>
							<RectButton
								style={{
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: theme.colors.secondary,
									height: 40,
									width: 40,
									borderRadius: 20,
								}}
							>
								<Icon
									name={"camera"}
									size={20}
									color={theme.colors.white}
								/>
							</RectButton>
						</Box>
					</Box>

					<Box marginTop={"m"}>
						<Text
							style={{
								fontFamily: "Archivo-Regular",
								fontWeight: "bold",
								fontSize: 24,
								lineHeight: 25,
								textAlign: "center",
								color: theme.colors.white,
							}}
						>
							Rafiou Sitou
						</Text>
						<Box marginTop={"xs"}>
							<Text
								style={{
									fontFamily: "Poppins-Regular",
									fontWeight: "normal",
									fontSize: 16,
									lineHeight: 26,
									textAlign: "center",
									color: theme.colors.melRose,
								}}
							>
								History
							</Text>
						</Box>
					</Box>
				</ImageBackground>
			</Box>
			<Box
				flex={1}
				marginHorizontal={"s"}
				backgroundColor={"white"}
				borderRadius={"ms"}
				top={-40}
			>
				<Box paddingHorizontal={"ms"} paddingVertical={"m"}>
					<Box
						borderBottomWidth={1}
						borderBottomColor={"athensGray"}
						paddingBottom={"s"}
					>
						<Text
							style={{
								fontFamily: "Archivo-Medium",
								fontWeight: "600",
								fontSize: 20,
								lineHeight: 30,
								color: theme.colors.martinique,
							}}
						>
							Your data
						</Text>
					</Box>
					<Box marginVertical={"m"}>
						<Text
							style={{
								fontFamily: "Poppins-Regular",
								fontSize: 12,
								lineHeight: 22,
								color: theme.colors.santaGray,
							}}
						>
							Name
						</Text>
						<Box
							height={56}
							backgroundColor={"almostWhite"}
							borderWidth={1}
							borderRadius={"ms"}
							borderColor={"athensGray"}
							style={{ marginTop: 4 }}
						>
							<TextInput
								placeholder={"Name"}
								placeholderTextColor={theme.colors.athensGray}
								style={{
									flex: 1,
									fontFamily: "Poppins-Regular",
									fontWeight: "normal",
									fontSize: 14,
									lineHeight: 24,
									color: theme.colors.dolphin,
									paddingHorizontal: theme.spacing.ms,
									paddingVertical: theme.spacing.s,
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Profile
