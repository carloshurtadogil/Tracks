import React, { useContext } from 'react';
import { TextInput, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Button, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
 
const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView>
          <Spacer>
            <Divider/>

              <TouchableOpacity style={styles.fieldStyle}>
                <Text>
                  Email

                  <Text style={{ justifyContent: 'flex-end' }}> Email</Text>
                </Text>
              </TouchableOpacity>

              <Divider/>
          </Spacer>

          <Spacer>
              <Button 
                  title="Sign Out"
                  onPress={ signout }
              />
          </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  fieldStyle: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15
  }
});

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: <FontAwesome name='gear' size={20} />
    };
};

AccountScreen.navigationOptions = () => {
    return {
      title: 'Account Properties',
      headerStyle: {
        backgroundColor: '#485461',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18
      }
    };
  };

export { AccountScreen };