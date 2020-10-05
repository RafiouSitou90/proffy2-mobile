import { Feather as Icon } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image } from "react-native"
import { RectButton } from "react-native-gesture-handler"

import giveClassesIcon from "../../../assets/images/icons/give-classes.png"
import heartIcon from "../../../assets/images/icons/heart.png"
import studyIcon from "../../../assets/images/icons/study.png"

import bgImage_2 from "../../../assets/images/landing.png"

import { Box, Text, useTheme } from "../../../theme"

const Home = () => {
	const navigation = useNavigation()
	const theme = useTheme()

	return (
		<Box flex={1} backgroundColor="grayBackground">
			<Box
				flex={0.45}
				backgroundColor="primary"
				paddingHorizontal={"ms"}
				flexDirection={"column"}
				justifyContent={"space-around"}
			>
				<Box
					flexDirection={"column"}
					style={{ marginTop: 60 }}
					paddingHorizontal={"s"}
				>
					<Box
						flexDirection={"row"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<RectButton
							onPress={() => navigation.navigate("Profile")}
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<Image
								source={{
									uri:
										"https://avatars3.githubusercontent.com/u/39632507?s=460&u=b5f5e665e6b249f4202b50f622e4df6260331624&v=4",
								}}
								style={{
									width: 50,
									height: 50,
									borderRadius: 25,
								}}
							/>
							<Box marginLeft={"s"}>
								<Text
									style={{
										fontSize: 16,
										color: theme.colors.melRose,
										fontFamily: "Poppins-Regular",
										fontWeight: "500",
										lineHeight: 22,
									}}
								>
									Rafiou Sitou
								</Text>
							</Box>
						</RectButton>
						<Box>
							<RectButton
								style={{
									width: 40,
									height: 40,
									borderRadius: 8,
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: theme.colors.mediumPurple,
								}}
							>
								<Icon
									name={"power"}
									size={20}
									color={theme.colors.melRose}
								/>
							</RectButton>
						</Box>
					</Box>
				</Box>
				<Box alignSelf={"center"}>
					<Image source={bgImage_2} />
				</Box>
			</Box>
			<Box
				paddingTop={"ms"}
				flex={0.55}
				style={{ paddingHorizontal: 32 }}
			>
				<Box paddingHorizontal={"xs"}>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontWeight: "600",
							fontSize: 24,
							lineHeight: 34,
							color: theme.colors.dolphin,
						}}
					>
						Welcome.
					</Text>
					<Box marginTop={"s"}>
						<Text
							style={{
								fontFamily: "Poppins-Medium",
								fontWeight: "800",
								fontSize: 30,
								lineHeight: 34,
								color: theme.colors.dolphin,
							}}
						>
							What do you want to do?
						</Text>
					</Box>
				</Box>

				<Box
					flexDirection={"row"}
					justifyContent={"space-between"}
					marginTop={"ms"}
				>
					<RectButton
						style={{
							width: 148,
							height: 158,
							flexDirection: "column",
							justifyContent: "space-around",
							backgroundColor: theme.colors.primary,
							borderRadius: theme.borderRadii.ms,
							padding: theme.spacing.m,
						}}
					>
						<Image source={studyIcon} />

						<Text
							style={{
								fontFamily: "Archivo-Bold",
								color: theme.colors.white,
								fontSize: 20,
							}}
						>
							Study
						</Text>
					</RectButton>
					<RectButton
						style={{
							width: 148,
							height: 158,
							flexDirection: "column",
							justifyContent: "space-around",
							backgroundColor: theme.colors.secondary,
							borderRadius: theme.borderRadii.ms,
							padding: theme.spacing.m,
						}}
					>
						<Image source={giveClassesIcon} />

						<Text
							style={{
								fontFamily: "Archivo-Bold",
								color: theme.colors.white,
								fontSize: 20,
							}}
						>
							Teach
						</Text>
					</RectButton>
				</Box>

				<Box marginTop={"l"}>
					<Text
						style={{
							fontFamily: "Poppins-Regular",
							fontWeight: "normal",
							fontSize: 14,
							lineHeight: 20,
							color: theme.colors.santaGray,
							textAlign: "left",
						}}
					>
						More than 300 connections{"\n"}done{" "}
						<Image source={heartIcon} />
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default Home
