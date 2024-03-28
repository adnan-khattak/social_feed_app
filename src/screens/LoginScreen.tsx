import React from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

interface FormData {
    phone: string;
    password: string;
}
const LoginScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigation = useNavigation();
  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form data submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image
          source={require('./logo.png')} // Replace 'logo.png' with your logo image
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <Text>ABC Universe</Text>
      </View>
      <View style={styles.inputContainer}>
      <Controller
              control={control}
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{11}$/, // Example pattern for a 10-digit phone number
                  message: 'Invalid phone number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
      )}
      name="phone"
    />
    {errors.phone && <Text>{errors.phone.message}</Text>}
    <Controller
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
        /> )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message}</Text>}

        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          color="#4299e1"
        />
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text>
          Create an account?
          <Text
            style={styles.signInText}
            onPress={() => {
              // navigation.navigate('SignUp')
            }}>
            Click Here
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  signInButton: {
    marginTop: 20,
  },
  signInText: {
    color: '#4299e1',
  },
});

export default LoginScreen;
