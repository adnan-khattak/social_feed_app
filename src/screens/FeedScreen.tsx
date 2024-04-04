import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import CreatePostScreen from './CreatePostScreen';

// Define type for post
type Post = {
    id: string;
    username: string;
    imageUrl: string;
    text: string;
    likes: number;
  };
const FeedScreen = () => {
    const [posts, setPosts] = useState<Post[]>([]);

  // Example data for posts
  const dummyPosts = [
    { id: '1', username: 'user1', imageUrl: 'https://via.placeholder.com/150', text: 'Lorem ipsum dolor sit amet', likes: 0 },
    { id: '2', username: 'user2', imageUrl: 'https://via.placeholder.com/150', text: 'Consectetur adipiscing elit', likes: 0 },
    { id: '3', username: 'user3', imageUrl: 'https://via.placeholder.com/150', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', likes: 0 },
  ];

  useEffect(() => {
    // Simulate fetching posts from a backend server
    // Replace this with actual API call to fetch posts
    setPosts(dummyPosts);
  }, []);

  const handleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };
  const handleCreatePost = () => {
    // Handle navigation to Create Post screen (replace with your navigation logic)
    // navigation.navigate('CreatePostScreen'); // Assuming you have navigation
    console.log('clicked')
  };
  

  const renderPostItem = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        {/* <Image source={{ uri: 'profileImageUrl' }} style={styles.profileImage} /> */}
        <Image source={require('../../assets/images/IMG-20210610-WA0095.jpg')} style={styles.profileImage} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.postText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleLike(item.id)}>
        <Text style={styles.likeButton}>Like ({item.likes})</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <NavigationBar />
      <FlatList
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
      <TouchableOpacity onPress={handleCreatePost} style={styles.createPostButton}>
        <Text style={styles.createPostButtonText}>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  flatList: {
    width: '100%',
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 5,
  },
  postText: {
    fontSize: 16,
  },
  likeButton: {
    color: 'blue',
    marginTop: 5,
  },
  createPostButton: {
    position: 'absolute',
    bottom: 10, // Adjust position as needed
    right: 5, // Adjust position as needed
    backgroundColor: '#000', // Choose a suitable color
    padding: 10,
    borderRadius: 5,
  },
  createPostButtonText: {
    color: '#fff', // Choose a suitable text color
  },
});

export default FeedScreen;
