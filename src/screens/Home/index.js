import React, { useEffect, useState } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import Post from '../../components/Post';
import Panel from '../../components/Panel';
// import { API, graphqlOperation } from 'aws-amplify';

// import posts from '../../../data/posts';
import { listPosts } from '../../graphql/queries';


// import { Panel, Page, Block, Navbar, Row, Col, Button, Link } from 'framework7-react';
import styles from './styles';

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

            var forms = [{
                "company": "TCS",
                "name": "user gender data",
                "form_data": [
                        {
                            "type": "scc",
                            "question_text": "what is your sex ?",
                            "options": ["male", "female", "others"]
                        }
                    ]
            },
            {
                "company": "TCS",
                "name": "user gender data",
                "form_data": [
                        {
                            "type": "scc",
                            "question_text": "what is your sex ?",
                            "options": ["male", "female", "others"]
                        }
                    ]
            }]
            // var forms = data.form_data;  
            setPosts(forms);
        };

        fetchPost();
    }, deps = []);

    return (
        //  <Text> hellloo thereee </Text>
        //  <View></View>
        // <View>
            // <FlatList
            //     data = {posts}
            //     renderItem = { ({item}) => <Post post = {item}/>}
            //     showsVerticalScrollIndicator = {false}
            //     snapToInterval = {Dimensions.get('window').height} 
            //     snapToAlignment = {'start'}
            //     decelerationRate = {'fast'}
            // />
        // </View>

        // <View>
        //     {/* have to make for loop here */}
        //     <Panel resizable right dark>
        //     <View>
        //         <Page>
        //         <Block>Right panel content
        //             {/* heading -> show form content in a  for loop div for questions -> submit */}
        //         </Block>
        //         </Page>
        //     </View>
        //     </Panel>

        //     <Block>
        //     <Row tag="p">
        //     <Col tag="span">
        //     <Button raised fill panelOpen="right">
        //         Open right panel
        //         {/* show id, form_name, category and company  */}
        //     </Button>
        //     </Col>
        //     </Row>
        //     </Block>
        // </View>
        <View>
            <FlatList
                data = {posts}
                renderItem = { ({item}) => <Panel post = {item}/>}
                showsVerticalScrollIndicator = {false}
                snapToInterval = {Dimensions.get('window').height} 
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
            />
        </View>

    )
};

export default Home; 