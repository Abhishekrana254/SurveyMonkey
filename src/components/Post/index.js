import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Text, Image, TouchableOpacity } from 'react-native';
import Video from '../../../node_modules/react-native-video';
import styles from './styles';
// import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
import { updateUser } from '../../graphql/mutations';
// import { createUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {

    const [post, setPost] = useState( props.post);
    const [isLiked, setIsLiked] = useState( initialState= false);
    const [videoUri, setVideoUri] = useState('');
    const [paused, setPaused] = useState( initialState= false);

    // const [point, setPoint] = useState( props.point);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setPost( value= {
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);

        // likes added in database, and also in post in database 
    };

    const getVideoUri = async () => {
        if (post.videoUri.startsWith('http')) {
            setVideoUri(post.videoUri);
            return;
            // return post.videoUri;
            // why this problem of promise arised check this out please 
        }
        // response = await Storage.get(post.VideoUri);
        setVideoUri(await Storage.get(post.VideoUri));
    }

    // const onEnd = async () => {
    //     // setPlayerState(PLAYER_STATES.ENDED);
    //     // setCurrentTime(duration);
    //     console.log('video ended');
    //     // add points in user.points - done, testing 
    //     // add post_id in user posts_watched - to be done in db first, then here 

    //     var userInfo = await Auth.currentAuthenticatedUser(); 
    //     // console.log('userInfo', userInfo);
    //     // get from database 
    //     userInfo = await API.graphql(
    //         graphqlOperation(getUser, {id: userInfo.attributes.sub }),
    //     );
    //     // console.log('userInfo', userInfo);
    //     console.log('points', props);
    //     const updatedUser = {
    //         'id': userInfo.data.getUser.id,
    //         'point': userInfo.data.getUser.point + props.post.point
    //         // latest version here, yess done, after this just profile thats it done, now easylearn 
    //         // posts_watched: 
    //     }   
    //     console.log('updatedUser', updatedUser); 
    //     const response = await API.graphql(
    //         {
    //             query: updateUser, 
    //             variables: { input: updatedUser }
    //         }
    //     );
    //     console.log('response', response);

    // };

    useEffect( () => {
        getVideoUri();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.video}>
                {/* <View>

                    <Video
                        source={{ uri: videoUri}}
                        style={styles.video}
                        onError={(e: LoadError) => console.log(e)}
                        resizeMode={'cover'}
                        // repeat={true}
                        paused={paused}
                        onEnd={onEnd}
                    />
                


                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                            <View style={styles.profilePictureContainer}>
                                <Image 
                                    style={styles.profilePicture} 
                                    source={{uri: post.user.imageUri}} />
                            </View>

                            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                                <AntDesign name={'heart'} size={40} color={isLiked ? 'red': 'white'} />
                                <Text style={styles.statsLabel}>{post.likes}</Text>
                            </TouchableOpacity>

                            <View style={styles.iconContainer}>
                                <FontAwesome name={'commenting'} size={40} color='white' />
                                <Text style={styles.statsLabel}>{post.comments}</Text>
                            </View>

                            <View style={styles.iconContainer}>
                                <Fontisto name={'share-a'} size={40} color='white' />
                                <Text style={styles.statsLabel}>{post.shares}</Text>
                            </View>

                        </View>
                        
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle}>@{post.user.username}</Text>
                                <Text style={styles.description}>{post.description}</Text>
                                <View style={styles.songRow}>
                                    <Entypo name={'beamed-note'} size={24} color='white' />
                                    <Text style={styles.songName}>{post.song.name}</Text>
                                </View>
                            </View>
                            

                            <Image 
                                style={styles.songImage} 
                                source={{uri: post.song.imageUri}} 
                            />
                        </View>
                        
                    </View>

                </View> */}

            </TouchableWithoutFeedback>
        </View>
    );
};

export default Post;