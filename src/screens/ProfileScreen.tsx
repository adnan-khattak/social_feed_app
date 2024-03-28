import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Notification from '../components/Notification';

type Post = {
  id: string;
  imageUrl: string;
  text: string;
};

const ProfileScreen = () => {
  const [profileInfo, setProfileInfo] = useState<{
    username: string;
    posts: Post[];
    followers: number;
    following: number;
  } | null>(null);

  // Simulated profile data
  const dummyProfileInfo = {
    username: 'example_user',
    posts: [
      { id: '1', imageUrl: 'https://via.placeholder.com/150', text: 'Post 1' },
      { id: '2', imageUrl: 'https://via.placeholder.com/150', text: 'Post 2' },
      // Add more posts as needed
    ],
    followers: 1000,
    following: 500,
  };

  // Simulated fetchProfileInfo function
  const fetchProfileInfo = () => {
    // Simulate fetching profile information from backend
    setProfileInfo(dummyProfileInfo);
  };

  // Call fetchProfileInfo when the component mounts
  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const renderPostItem = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.postText}>{item.text}</Text>
    </View>
  );

  if (!profileInfo) {
    // Render loading indicator if profileInfo is null
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Profile header */}
      <View style={styles.profileHeader}>
        <Image source={require('../../assets/images/IMG-20210610-WA0095.jpg')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>{profileInfo.username}</Text>
          <View style={styles.followInfo}>
            <Text style={styles.followText}>Followers: {profileInfo.followers}</Text>
            <Text style={styles.followText}>Following: {profileInfo.following}</Text>
          </View>
        </View>
      </View>

      {/* User posts */}
      <FlatList
        data={profileInfo.posts}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        style={styles.postContainer} // <-- Corrected property name
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  followInfo: {
    flexDirection: 'row',
  },
  followText: {
    marginRight: 20,
    fontSize: 16,
    color: '#555',
  },
  postContainer: { // <-- Corrected property name
    flex: 1,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
