import React, { useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text as TextRN , Animated} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {View, TextField, Text, Button} from 'react-native-ui-lib';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import Button from 'react-native-ui-lib/button';
import TextField from 'react-native-ui-lib/textField';
import Card from 'react-native-ui-lib/card';
import cardImage from './assets/card_image.jpg';
import TabNavigator from './src/Components/TabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Screen1 = ({ navigation}) => {
  console.log("navigation: ", navigation)
  return (
    <View flex paddingH-25 paddingT-20>
      <Card 
         height={120}
         marginB-20
        >
        <Card.Section imageSource={cardImage} imageStyle={{height: '100%'}}/>
      </Card>
      <Text blue50 text20>Welcome</Text>
      <TextField text50 placeholder="username" dark10/>
      <TextField text50 placeholder="password" secureTextEntry dark10/>
      <View marginT-100 center>
        <Button text70 white background-orange20 label="Login" onPress={() => navigation.push('Screen2')}/>
        <Button link text70 orange30 label="Sign Up" marginT-20/>
      </View>
    </View>);
}

const HomeScreen = () => {
  const value = useRef(new Animated.Value(0));
  const [val, setVal] = useState(0);
  return (
    <View>
      <TextRN>Home Screen</TextRN>
      <Button ltext70 white background-orange20 label="Animate" marginT-20 onPress={() => {
        console.log("Current: ", val)
        console.log("changedval: ", val ? 0 : 1)
        const animated = Animated.timing(value.current, {
          toValue: val ? 0 : 1,
          useNativeDriver: true
        });
        animated.start();
        setVal(val ? 0 : 1)
      }}/>
      <Animated.Text style={{opacity: value.current, fontSize: 42}}>
        Hello World!
      </Animated.Text>
    </View>
  )
}

const SettingsScreen = () => {
  return <TextRN>Settings Screen!</TextRN>
}

const Screen2 = () => {
  
  return (<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
</Tab.Navigator>)
  
}


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
      </Stack.Navigator> */}
    </NavigationContainer>
    );
};

// const styles = StyleSheet.create({
// });

export default App;
