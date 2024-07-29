import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabBarBackgroundColor = Colors[colorScheme ?? 'light'].background;
  const iconColor = Colors[colorScheme ?? 'light'].icon

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon family='FontAwesome' name='home' color={focused ? iconColor : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon family='Octicons' name='search'  color={focused ? iconColor : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourits"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon family='FontAwesome' name='asterisk'  color={focused ? iconColor : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon family='Ionicons' name='person-circle'  color={focused ? iconColor : color} />
          ),
        }}
      />

    </Tabs>
  );
}
