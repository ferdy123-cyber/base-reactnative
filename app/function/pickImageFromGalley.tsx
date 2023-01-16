import * as upload from "react-native-image-picker"

export interface PickFromGaleryProps {
  /**
   * An optional style override useful for padding & margin.
   */
  description: string
  type: string
  duration?: number
}

const PickFromGalery = (props: PickFromGaleryProps) => {
  let options: any = {
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
    quality: 0.8,
  }
  upload.launchImageLibrary(options, (image) => {
    if (!image.didCancel) {
      console.log(image)
      // setPreviewImageFromGallery(image.assets[0].uri)
      // setPreviewFromGallery(true)
    }
  })
}

export default PickFromGalery
