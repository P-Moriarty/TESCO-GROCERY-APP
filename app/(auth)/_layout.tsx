import { Stack } from 'expo-router';
import React from 'react';
// import { IconSymbol } from '@/components/ui/IconSymbol';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function AuthLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Login',
          headerShown: true,
        //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: 'Signup',
          headerShown: true,
        //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Stack>
  );
}
