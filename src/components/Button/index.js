import React from 'react';

import { CustomButton, CustomLabel } from './styles';

export default function Button(props) {
  return (
    <CustomButton {...props}>
      <CustomLabel>{props.label}</CustomLabel>
    </CustomButton>
  );
}
