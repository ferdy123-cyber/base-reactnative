// MAVERICKTODO: update the generator template with new patterns

import * as React from "react"
import { Image, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, metrics, typography } from "../theme"
import { useCameraDevices, Camera, TemporaryFile } from "react-native-vision-camera"
import Toast from "./Toast"
import { Box, Button, Icon, Text } from "native-base"
import fonts from "../theme/fonts"
import { MaterialIcons } from "@expo/vector-icons"
import { ModalLoading } from "./ModalLoading"

export interface UplReviewProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onOk: any
  title: string
  image: string
}

/**
 * Describe your component here
 */
export const UplReview = observer(function UplReview(props: UplReviewProps) {
  const { style, onOk, title, image } = props

  return (
    <Box style={{ flex: 1, position: "relative" }}>
      <View style={styles.header}>
        <Text fontSize={"xl"} style={styles.title}>
          {title}
        </Text>
        <Icon
          onPress={() => onOk(image)}
          as={MaterialIcons}
          name={"check"}
          size={"xl"}
          color={colors.blue}
        />
      </View>
      <Image
        style={{ width: "100%", flex: 1, resizeMode: "contain", backgroundColor: "black" }}
        source={{ uri: image }}
      />
    </Box>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: metrics.paddingTop,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    height: 40,
    zIndex: 99,
  },
  title: {
    fontFamily: fonts.type.bold,
    color: colors.blue,
    marginRight: "auto",
  },
  helpIconView: {
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  helpIcon: { width: 25, height: 25, resizeMode: "contain" },
})
