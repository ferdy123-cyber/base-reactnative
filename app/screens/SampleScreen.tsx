import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { Modal, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackParamList, AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
import { Button } from "native-base"
import Toast from "../components/Toast"
import fonts from "../theme/fonts"
import { View } from "native-base"
import { metrics } from "../theme"
import { CameraFunc } from "../components/CameraFunc"
import * as upload from "react-native-image-picker"
import { UplReview } from "../components/UplGalleryReview"
import { useStores } from "../models"

export const SampleScreen: FC<StackScreenProps<AppStackParamList, "Sample">> = observer(
  function SampleScreen() {
    const {
      sampleStore: { getPosts, listData },
    } = useStores()

    const [camera, setcamera] = useState(false)
    const [previewGallery, setPreviewGallery] = useState(null)

    const pickFromGalery = () => {
      upload.launchImageLibrary(options, (image) => {
        if (!image.didCancel) {
          // console.log(image)
          setPreviewGallery(image.assets[0].uri)
        }
      })
    }

    console.log(listData)

    useEffect(() => {
      getPosts()
    }, [])

    return (
      <Screen contentContainerStyle={$root} preset="scroll">
        <Modal statusBarTranslucent visible={camera} onRequestClose={() => setcamera(false)}>
          <View style={{ flex: 1, paddingTop: metrics.paddingTop }}>
            <CameraFunc
              onOk={(image: any) => {
                console.log(image)
                setcamera(false)
              }}
              close={() => setcamera(false)}
              title="Preview Foto"
            />
          </View>
        </Modal>
        <Modal
          statusBarTranslucent
          visible={!!previewGallery}
          onRequestClose={() => setPreviewGallery(null)}
        >
          <View style={{ flex: 1, paddingTop: metrics.paddingTop }}>
            {previewGallery && (
              <UplReview
                image={previewGallery}
                title="Preview Foto"
                onOk={(image: any) => {
                  console.log(image)
                  setPreviewGallery(null)
                }}
              />
            )}
          </View>
        </Modal>
        <Text text="Sample Screen" />
        <Button
          onPress={() => {
            Toast({ type: "success", description: "Ini adalah notifikasi" })
          }}
        >
          <Text style={{ fontFamily: fonts.type.xtra_bold }}>Show Toast</Text>
        </Button>
        <Button
          onPress={() => {
            setcamera(true)
          }}
        >
          <Text style={{ fontFamily: fonts.type.xtra_bold }}>Open Camera</Text>
        </Button>
        <Button
          onPress={() => {
            pickFromGalery()
          }}
        >
          <Text style={{ fontFamily: fonts.type.xtra_bold }}>Open Gallery</Text>
        </Button>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}

const options: any = {
  storageOptions: {
    skipBackup: true,
    path: "images",
  },
  quality: 0.8,
}
