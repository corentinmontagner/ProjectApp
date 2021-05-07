import React from 'react'
import {View, Text, Button} from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
    webClientId: '1068841052579-t8rc9neat227a6kt7j38rkfcra1iih2u.apps.googleusercontent.com',
    offlineAccess: true
  });

const LoginScreen = () => {
    async function onGoogleButtonPress() {
        try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            console.log(idToken)
          
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text>LOGIN SCREEN</Text>
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
            />
        </View>
    )
}

/*import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { gql, useMutation } from '@apollo/client'

import styles from './Styles/Login'

import { AuthContext } from '../Contexts/AuthContext'

//import { darkTheme } from '../Theme/Color'

const MUTATION_LOGIN = gql`
    mutation loginMutation(
        $input: UsersPermissionsLoginInput!
    ) {
        login(input: $input) {
            jwt
            user {
                id
                email
                username
            }
        }
    }
`

const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('userToken', token)
    } catch (error) {
        console.error(error)
    }
}

const Login = ({ navigation }) => {
    const [username, setUsername] = React.useState('coco@gmail.com')
    const [password, setPassword] = React.useState('cocococo')

    const { signIn } = React.useContext(AuthContext);

    const [login] = useMutation(MUTATION_LOGIN, {
        variables: {
            input: {
                identifier: username,
                password: password, 
                provider: 'local'
            }
        },
        onCompleted: async (result) => {
            await storeToken(result.login.jwt)
            signIn(result.login)
        },
        onError: (error) => {
            console.error(error)
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholder='Entrez votre username'
                placeholderTextColor={darkTheme.text} 
            />
            <TextInput 
                secureTextEntry
                style={styles.textInput}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='Entrez votre password'
                placeholderTextColor={darkTheme.text} 
            />
            <Button 
                title='Login' 
                onPress={() => {
                    console.log(`LOGIN :  ${username} ${password}`)
                    login()
                }} 
            />
            <Button
                title='Register'
                onPress={() => navigation.navigate('Register')} 
            />
        </View>
    )
}*/

export default LoginScreen
