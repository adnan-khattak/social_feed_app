import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker, { ImagePickerResponse, ImageLibraryOptions, MediaType } from 'react-native-image-picker';

const CreatePostScreen = () => {
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<ImagePickerResponse | null>(null);

  const pickImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
        setImage(response); // Update state with the response object
      } else {
        console.log('ImagePicker Error: No image URI found in response');
      }
    });
  };

  const handleSubmit = () => {
    // Handle post submission logic here
    console.log('Text:', text);
    // console.log('Image URI:', image && image.uri);
    // Reset state after submission if necessary
    setText('');
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image source={require('../../assets/images/IMG-20210610-WA0095.jpg')} style={styles.profileImage} />
        <TextInput
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        <Image source={require('../../assets/images/IMG-20210610-WA0095.jpg')} style={styles.imageIcon} />
        
        {/* <Text style={styles.imagePickerText}>Add Photo/Video</Text> */}
      </TouchableOpacity>
      {image && image.assets && image.assets.length > 0 && (
        <Image source={{ uri: image.assets[0].uri }} style={styles.image} />
      )}
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  imagePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  imagePickerText: {
    color: '#4267B2',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default CreatePostScreen;
