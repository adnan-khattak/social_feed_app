import React from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
interface FormData {
    username: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
const SignUpScreen = () => {
    const { control, handleSubmit, formState: { errors }, watch } = useForm<FormData>(); // Specify the FormData type here
    // const {
    //     control,
    //     handleSubmit,
    //     formState: {errors},
    //     reset,
    //     watch,
    //   } = useForm({
    //     defaultValues: {
    //     username: '',
    //     phone: '',
    //     password: '',
    //     confirmPassword: '',
    //      },
    //   });
    const navigation = useNavigation();
    const onSubmit = (data: FormData) => { // Specify the FormData type here as well
        console.log(data); // Handle form data submission
    };
    const password1 = watch('password', '');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text>WElcome</Text>
        {/* <Image
          source={require('./logo.png')} // Replace 'logo.png' with your logo image
          style={styles.logo}
          resizeMode="contain"
        /> */}
      </View>
      <View style={styles.inputContainer}>
      <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="User Name | صارف نام"
                  placeholderTextColor="#a0aec0"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && <Text>This is required.</Text>}

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
                  placeholder="Mobile Number | فون نمبر"
                  placeholderTextColor="#a0aec0"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  // value={value}
                />
              )}
              name="phone"
            />
            {errors.phone && <Text>{errors.phone.message}</Text>}
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Create Password | پاس ورڈ بنائیں"
                  placeholderTextColor="#a0aec0"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && <Text>{errors.password.message}</Text>}
            <Controller
              control={control}
              rules={{
                required: 'Confirm password is required',
                validate: value =>
                  value === password1 || 'Passwords do not match',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password | تصدیق کریں"
                  placeholderTextColor="#a0aec0"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text>{errors.confirmPassword.message}</Text>
            )}
        <Button
          title="Sign Up"
          onPress={handleSubmit(onSubmit)}
          color="#4299e1"
        />
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text>Already have an account?
        <Text
          style={styles.signInText}
          onPress={() => {
            // navigation.navigate('Login')
          }}
        >
           Sign in
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
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signInButton: {
    marginTop: 20,
  },
  signInText: {
    color: '#4299e1',
  },
});

export default SignUpScreen;
