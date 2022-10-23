import React, { useEffect, useState } from 'react';
import { FlatList, Dimensions, Text } from 'react-native';
import Post from '../../components/Post';
// import { API, graphqlOperation } from 'aws-amplify';

// import posts from '../../../data/posts';
import { listPosts } from '../../graphql/queries';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect( effect = () => {
        const fetchPost = async () => {
            // fetch all the posts 
            // try {
            //     const response = await API.graphql(graphqlOperation(listPosts));
            //     console.log(response);
            //     setPosts(response.data.listPosts.items);
            // }
            // catch (e) {
            //     console.error(e);
            // }
        };

        fetchPost();
    }, deps = []);

    return (
        <Text>in retail home</Text>
        // <View>
        //     <FlatList
        //         data = {posts}
        //         renderItem = { ({item}) => <Post post = {item}/>}
        //         showsVerticalScrollIndicator = {false}
        //         snapToInterval = {Dimensions.get('window').height} 
        //         snapToAlignment = {'start'}
        //         decelerationRate = {'fast'}
        //     />
        // </View>
    )
};

export default Home; 