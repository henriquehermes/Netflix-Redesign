import React from 'react';

import { CustomInput } from './styles';

export default function Input(props) {
  return (
    <CustomInput placeholderTextColor="rgba(255,255,255,0.2)" {...props} />
  );
}
