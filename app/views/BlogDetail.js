import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    useWindowDimensions
} from 'react-native';
import RenderHTML from 'react-native-render-html';

const BlogDetail = ({ route, navigation }) => {
    const [postLoaded, setPostLoaded] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postImage, setPostImage] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postID, setPostID] = useState('');
    const { width } = useWindowDimensions();
    const { blogId } = route.params;

    const getPost = async () => {
        try {
            const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts/${blogId}`);
            const post = await response.json();
            setPostTitle(post.title);
            setPostImage(post.featured_image);
            setPostContent(post.content);
            setPostID(post.ID);
        } catch (error) {
            console.error(error);
        } finally {
            setPostLoaded(true);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    const blogTagStyles = {
        img: { display: 'none' }
    };

    const blogClassStyles = {
        blTitle: { marginLeft: 'auto', marginRight: 'auto' },
        blContent: { marginLeft: 10, marginRight: 10 },
        blBack: { marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20 }
    };

    const postDetails = {
        html: `
            <div class="blTitle">
                <h1>${postTitle}</h1>
            </div>

            <div class="blContent">
                <h1>${postContent}</h1>
            </div>

            <div class="blBack">
                <a href = ${postID} style="textDecorationLine: none; color: #000000">
                    <h2> GO BACK </h2>
                </a>
            </div>
        `
    };

    const renderersProps = {
        a: {
            onPress(event, url, htmlAttribs, target) {
                navigation.navigate('Blog');
            }
        }
    };

    return (
        <View style={{ paddingTop: 30 }}>
            {postLoaded ?
                <ScrollView>
                    <Image
                        style={{ width: '100%', height: 200 }}
                        source={{ uri: postImage }}
                    />
                    <RenderHTML
                        source={postDetails}
                        tagsStyles={blogTagStyles}
                        classesStyles={blogClassStyles}
                        renderersProps={renderersProps}
                        contentWidth={width}
                    />
                </ScrollView>
                :
                <View style={{ paddingTop: 20, alignItems: 'center' }}>
                    <Text> LOADING </Text>
                </View>
            }
        </View>
    );
};

export default BlogDetail;





