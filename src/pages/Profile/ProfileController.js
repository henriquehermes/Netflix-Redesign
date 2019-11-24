import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import ProfileComponent from './ProfileComponent';

export default function ProfileController({ navigation }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const response = await AsyncStorage.getItem('User');
      if (response) {
        setUser(JSON.parse(response));
      }
    }
    getUser();
  }, []);

  return <ProfileComponent data={user} navigation={navigation} />;
}
