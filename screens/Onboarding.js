import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, Image } from 'react-native'
import { slides } from '../onboardingSlides'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Controls = () => {
  <View>
    <View>
      <Text>Indicator</Text>
    </View>
  </View>
}

const Slides = ({screen}) => {
  return (
  <View>
    <Text>{screen.title}</Text>
    <Text>{screen.subTitle}</Text>
    <Image source={screen.image} style={{height: '70%', width: '100%', resizeMode: 'contain'}} />
  </View>
  )
}

const Onboarding = () => {
  return (
    <SafeAreaView>
      <Text>Onboarding</Text>
      <FlatList 
        data={slides}
        pagingEnabled
        keyExtractor={(screen) => screen.id }
        contentContainerStyle={{}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slides screen={item} />}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

export default Onboarding