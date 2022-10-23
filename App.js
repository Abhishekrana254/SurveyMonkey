// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import {Permission, PERMISSION_TYPE} from './src/AppPermission';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Navigation from './src/navigation';
import RetailNavigation from './src/RetailNavigation';

// import { Amplify } from 'aws-amplify';
// import {Auth, API, graphqlOperation} from 'aws-amplify';
// import {withAuthenticator} from 'aws-amplify-react-native';

// import {createUser} from './src/graphql/mutations';
// import {getUser} from './src/graphql/queries';

// import awsmobile from './src/aws-exports' ;
// config = awsmobile;
// Amplify.configure({
//     ...config,
//     Analytics: { 
//       disabled: true
//     }
// });

const randomImages = [
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
  ];
  
  const getRandomImage = () => {
    return randomImages[Math.floor(Math.random() * randomImages.length)];
  };

// const App: () => React$Node = () => {
  const App = () => {
    const [userType, setUserType] = useState('user');

    // componentDidMount = () => {
      
    // };    

    // useEffect( () => {
    //     Permission.checkPermission(PERMISSION_TYPE.microphone);
    //     Permission.checkPermission(PERMISSION_TYPE.camera);  

    //     const fetchUser = async () => {
    //         // get currently authenticated user 
    //         const userInfo = await Auth.currentAuthenticatedUser( {bypassCache: true});

    //         // put user type in state variable here - done 
    //         // use state varibale in rendering navigate or retail navigate, thats it in here - done 
    //         // make diff navigtion for retail: retailHome, createPost - done almost 
    //         // navigation: Home, thats it right : shoudl be easy to be done by today - done 


    //         // testing thats it, then take the code start by today - doing right now - 1 hour now 
    //         // technically logically should be done, just test one more time and thats it 

    //         if (!userInfo) {
    //             return;
    //         }

    //         setUserType(userInfo.attributes['custom:type']);

    //         // check if user in database 
    //         const getUserResponse = await API.graphql(
    //             graphqlOperation(
    //                 getUser,
    //                 {id: userInfo.attributes.sub}
    //             )
    //         )

    //         if (getUserResponse.data.getUser) {
    //             console.log('User already exists in database');
    //             return 
    //         }

    //         // if doesn't exist then its newly existing user 
    //         // create a new user in database 
    //         const newUser = {
    //             id: userInfo.attributes.sub,
    //             username: userInfo.username,
    //             email: userInfo.attributes.email,
    //             imageUri: getRandomImage(),
    //             type: userInfo.attributes['custom:type'],
    //             // type , create in the database also graphql file and amplify push 
    //             point: 0
    //             // custom attribute in the sign up page 
    //         }

    //         await API.graphql(
    //             graphqlOperation(
    //                 createUser,
    //                 { input: newUser }
    //             )
    //         )

    //     };

    //     fetchUser();
    // }, []);

    return (
      <>

      {/* <View></View> */}
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {(userType == 'user') ? <Navigation/> : <RetailNavigation/>}  
      </SafeAreaView>
      </>
    )
}

export default App;

// export default withAuthenticator(App, 
//   {
//     // theme: Bootstrap,
//     // usernameAttributes: 'email',
//     signUpConfig: {
//        signUpFields: [{ key: 'custom:type', label: 'Type of User',required: true }]
//     }
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: '40%',
//   },
//   dummyText: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//     textAlign: 'center'
//   }
// });
