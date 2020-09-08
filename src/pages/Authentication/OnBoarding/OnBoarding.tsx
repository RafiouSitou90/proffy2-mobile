import React, { useRef } from "react"
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native"
import Animated, {
	divide,
	Extrapolate,
	interpolate,
	multiply,
} from "react-native-reanimated"
import { interpolateColor, useScrollHandler } from "react-native-redash"

import bgImage_1 from "../../../assets/images/bgImage_1.png"
import bgImage_2 from "../../../assets/images/bgImage_2.png"

import slide_02 from "../../../assets/images/icons/give-classes.png"
import slide_01 from "../../../assets/images/icons/study.png"

import { Box, makeStyles, palette, Theme, useTheme } from "../../../theme"

import Dot from "./Dot"
import Slide from "./Slide"
import SubSlide from "./SubSlide"

const slides = [
	{
		color: palette.purple,
		label: "01.",
		description: "Find multiple teachers to teach you",
		image: {
			src: slide_01,
			width: 120,
			height: 120,
		},
		backgroundImage: {
			src: bgImage_1,
			width: 250,
			height: 236,
		},
	},
	{
		color: palette.lightGreen,
		label: "02.",
		description: "Or give classes on what you know best",
		image: {
			src: slide_02,
			width: 100,
			height: 100,
		},
		backgroundImage: {
			src: bgImage_2,
			width: 259,
			height: 206,
		},
	},
]

export const assets = slides.map((slide) => [
	slide.image.src,
	slide.backgroundImage.src,
])

const { width, height } = Dimensions.get("window")

export const SLIDE_HEIGHT = 0.4 * height

const OnBoarding = () => {
	const styles = useStyles()
	const theme = useTheme()
	const scroll = useRef<Animated.ScrollView>(null)
	const { scrollHandler, x } = useScrollHandler()

	const backgroundColor = interpolateColor(x, {
		inputRange: slides.map((_, i) => i * width),
		outputRange: slides.map((slide) => slide.color),
	})

	return (
		<Box style={styles.container}>
			<Animated.View style={[styles.slider, { backgroundColor }]}>
				{slides.map(({ image, backgroundImage }, index) => {
					const opacity = interpolate(x, {
						inputRange: [
							(index - 0.5) * width,
							index * width,
							(index + 0.5) * width,
						],
						outputRange: [0, 1, 0],
						extrapolate: Extrapolate.CLAMP,
					})
					return (
						<Animated.View
							key={index}
							style={[styles.underlay, { opacity }]}
						>
							<ImageBackground
								source={backgroundImage.src}
								style={{
									width: width - width * 0.35,
									height:
										(width * backgroundImage.height) /
										backgroundImage.width,
									alignItems: "center",
									justifyContent: "center",
								}}
								resizeMode="contain"
							>
								<Image
									source={image.src}
									style={{
										width: image.width,
										height: image.height,
									}}
								/>
							</ImageBackground>
						</Animated.View>
					)
				})}
				<Animated.ScrollView
					ref={scroll}
					horizontal
					snapToInterval={width}
					decelerationRate="fast"
					showsHorizontalScrollIndicator={false}
					bounces={false}
					{...scrollHandler}
				>
					{slides.map(({ label, image }, index) => (
						<Slide
							key={index}
							right={!!(index % 2)}
							{...{ label, image }}
						/>
					))}
				</Animated.ScrollView>
			</Animated.View>
			<Box style={styles.footer}>
				<Animated.View
					style={{
						...StyleSheet.absoluteFillObject,
						backgroundColor,
					}}
				/>
				<Box style={styles.footerContent}>
					<Box style={styles.pagination}>
						{slides.map((_, index) => (
							<Dot
								key={index}
								currentIndex={divide(x, width)}
								{...{ index }}
							/>
						))}
					</Box>

					<Animated.View
						style={{
							flex: 1,
							flexDirection: "row",
							width: width * slides.length,
							transform: [{ translateX: multiply(x, -1) }],
						}}
					>
						{slides.map(({ subtitle, description }, index) => {
							const last = index === slides.length - 1
							return (
								<SubSlide
									key={index}
									onPress={() => {
										if (last) {
											navigation.navigate("Welcome")
										} else {
											scroll.current?.getNode().scrollTo({
												x: width * (index + 1),
												animated: true,
											})
										}
									}}
									{...{ subtitle, description, last }}
								/>
							)
						})}
					</Animated.View>
				</Box>
			</Box>
		</Box>
	)
}

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.white,
	},
	slider: {
		height: SLIDE_HEIGHT,
	},
	underlay: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	},
	footer: {
		flex: 1,
	},
	footerContent: {
		flex: 1,
		backgroundColor: "#E5E5E5",
	},
	pagination: {
		...StyleSheet.absoluteFillObject,
		flexDirection: "row",
		height: theme.borderRadii.xl,
		justifyContent: "center",
		alignItems: "center",
	},
}))

export default OnBoarding
