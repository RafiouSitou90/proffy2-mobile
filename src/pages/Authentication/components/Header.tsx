import React from "react"
import { Dimensions, Image, ImageBackground } from "react-native"

import bgImage_2 from "../../../assets/images/bgImage_2.png"
import logo from "../../../assets/images/logo.png"

import { Box, Text } from "../../../theme"

const { height, width } = Dimensions.get("window")

const Header = () => {
	return (
		<Box
			height={height * 0.45}
			backgroundColor="primary"
			justifyContent="center"
			alignItems="center"
		>
			<ImageBackground
				source={bgImage_2}
				style={{
					width: width - width * 0.25,
					height: (width * 206) / 259,
					alignItems: "center",
					justifyContent: "center",
				}}
				resizeMode="contain"
			>
				<Box
					flexDirection="column"
					justifyContent="space-between"
					alignItems="flex-start"
					paddingVertical="l"
				>
					<Box marginTop="l">
						<Image
							source={logo}
							style={{
								width: 150,
								height: 50,
								padding: 5,
							}}
						/>
					</Box>

					<Box style={{ width: 110 }}>
						<Text
							color="melRose"
							style={{
								fontFamily: "Poppins-Regular",
								fontWeight: "800",
								fontSize: 13,
							}}
						>
							Your online study platform.
						</Text>
					</Box>
				</Box>
			</ImageBackground>
		</Box>
	)
}

export default Header
