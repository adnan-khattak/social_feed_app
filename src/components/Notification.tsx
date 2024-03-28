import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

type Notification = {
  id: string;
  userId: string;
  message: string;
};

const Notification = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Simulated notification data
  const dummyNotifications = [
    { id: '1', userId: 'user1', message: 'User1 liked your post' },
    { id: '2', userId: 'user2', message: 'User2 liked your post' },
    { id: '3', userId: 'user3', message: 'User3 liked your post' },
    // Add more notifications as needed
  ];

  // Simulated fetchNotifications function
  const fetchNotifications = () => {
    // Simulate fetching notifications from backend
    setNotifications(dummyNotifications);
  };

  // Call fetchNotifications when the component mounts
  useEffect(() => {
    fetchNotifications();
  }, []);

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <TouchableOpacity style={styles.notificationContainer}>
      <Image source={{ uri: `https://via.placeholder.com/50?text=${item.userId}` }} style={styles.userImage} />
      <Text style={styles.notificationText}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
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
  notificationList: {
    flex: 1,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
  },
});

export default Notification;
