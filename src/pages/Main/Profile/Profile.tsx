import React from "react"
import { Dimensions, Image } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"

import backIcon from "../../../assets/images/icons/back.png"
import logo from "../../../assets/images/logo.png"

import { Box, Text, useTheme } from "../../../theme"

const { height } = Dimensions.get("window")

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
			<Box height={height * 0.4} backgroundColor={"primary"}></Box>
		</Box>
	)
}

export default Profile
