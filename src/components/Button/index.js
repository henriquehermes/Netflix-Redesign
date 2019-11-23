import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomButton, CustomLabel } from './styles';

export default function Button(props) {
  return (
    <CustomButton {...props}>
      {props.image && (
        <Icon
          name={props.imageName}
          color="#Fff"
          size={20}
          style={{ marginRight: 5 }}
        />
      )}
      <CustomLabel>{props.label}</CustomLabel>
    </CustomButton>
  );
}
