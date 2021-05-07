import React, { useRef } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'

const CameraScreen = () => {
    const cameraRef = useRef()
    const takePicture = async () => {
        if (cameraRef) {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          console.log(data.uri);
        }
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        },
        preview: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        capture: {
          flex: 0,
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 15,
          paddingHorizontal: 20,
          alignSelf: 'center',
          margin: 20,
        },
    });

    return (
        <View style={styles.container}>
            <Text>CAMERA SCREEN</Text>
            <RNCamera
                ref={cameraRef}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture} style={styles.capture}>
                    <Text>PHOTO !</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default CameraScreen