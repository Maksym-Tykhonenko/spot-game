import React, { } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';



import HomeScreen from "./screens/HomeScreen";
import RulesScreen from "./screens/RulesScreen";
import LvlSelectionScreen from "./screens/LvlSelectionScreen";
import FirstLvl from "./screens/FirstLvl";
import SecondLvl from "./screens/SecondLvl";
import ThirdLvl from "./screens/ThirdLvl";
import FourthLvl from "./screens/FourthLvl";
import FifthLvl from "./screens/FifthLvl";
import SixthLvl from "./screens/SixthLvl";
import SeventhLvl from "./screens/SeventhLvl";
import EighthLvl from "./screens/EighthLvl"; 
import NinthLvl from "./screens/NinthLvl";
import TenthLvl from "./screens/TenthLvl";

import { store } from "./redax/store";

const App = () => {
  
  const Stack = createNativeStackNavigator();

  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false} } />
       <Stack.Screen name="Rules" component={RulesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LvlSelection" component={LvlSelectionScreen}  options={{headerShown: false} } />
          <Stack.Screen name="1 Lvl" component={FirstLvl}  options={{headerShown: false} } />
          <Stack.Screen name="2 Lvl" component={SecondLvl} options={{headerShown: false} }  />
          <Stack.Screen name="3 Lvl" component={ThirdLvl}  options={{headerShown: false} } />
          <Stack.Screen name="4 Lvl" component={FourthLvl} options={{headerShown: false} }  />
         <Stack.Screen name="5 Lvl" component={FifthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="6 Lvl" component={SixthLvl} options={{headerShown: false} }  />
           <Stack.Screen name="7 Lvl" component={SeventhLvl} options={{headerShown: false} }  />
          <Stack.Screen name="8 Lvl" component={EighthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="9 Lvl" component={NinthLvl} options={{headerShown: false} }  />
          <Stack.Screen name="10 Lvl" component={TenthLvl} options={{headerShown: false} }  />
        

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};
export default App;