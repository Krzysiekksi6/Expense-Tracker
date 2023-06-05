import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../../UI/AuthInput/CustomInput';
import CustomButton from '../../UI/AuthButton/CustomButton';
import {GlobalColors} from '../../constans/styles';
const AuthForm = ({isLogin, onSubmitForm}) => {
  /**
   * React Hook form
   */
  type FormData = {
    email: string;
    password: string;
    confirmEmail: string;
    confirmPassword: string;
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmEmail: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data): void => {
    const {email, confirmEmail, password, confirmPassword} = data;
    console.log(email, confirmEmail, password, confirmPassword);
    onSubmitForm(email, password);
  };

  console.log('errors', errors);

  /**
   * ------------
   */

  return (
    <View style={styles.form}>
      <Controller
        control={control}
        rules={{
          required: true,
          validate: {
            minLength: v => v.length >= 5,
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder={'email@example.com'}
            onUpdateValue={value => onChange(value)}
            keyboardType="email-address"
            secureTextEntry={false}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          validate: {
            minLength: v => v.length >= 5,
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder={'Password'}
            onUpdateValue={value => onChange(value)}
            secureTextEntry={true}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>This is required.</Text>
      )}

      <CustomButton
        text={isLogin ? 'Log In' : 'Sign Up'}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  buttons: {
    marginTop: 12,
  },
  errorText: {
    color: GlobalColors.colors.error500,
  },
});
