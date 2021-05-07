import { StyleSheet } from 'react-native'
import { darkTheme } from '../../Theme/Color'

export default StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: darkTheme.background
    },
    text: {
        color: darkTheme.text
    },
    textInput: {
        width: 250,
        height: 50,
        borderColor: darkTheme.border,
        borderWidth: 1,
        marginVertical: 10,
        color: darkTheme.text
    }
})