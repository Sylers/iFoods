import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import { onboardingSlides } from '../onboardingSlides'
import React from 'react'

const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Onboarding