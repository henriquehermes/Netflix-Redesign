import React from 'react';

import { CustomInput } from './styles';

export default function Input({ placeHolder, type, secureTextEntry }) {
  return (
    <CustomInput
      placeholder={placeHolder}
      placeholderTextColor="rgba(255,255,255,0.2)"
      type={type}
      secureTextEntry={secureTextEntry}
    />
  );
}
