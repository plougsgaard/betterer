import React from 'react'
import { Image, View, ScrollView, Text } from 'react-native'
import styles from './Styles/MaterialCardStyle'

export const CardItem = ({
  imageSource
}) => (
  <View style={styles.cardStyle}>
    <Image source={imageSource} style={styles.cardImageStyle}></Image>
    <Text style={styles.cardTitleStyle}>Welcome</Text>
    <View style={{ padding : 15 }}>
      <Text style={[styles.cardContentStyle, { padding: 0 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </Text>
    </View>
    <View style={styles.cardMenuStyle}><Text>Menu action</Text></View>
    <View style={styles.cardActionStyle}>
      <Text>Some action</Text>
    </View>
  </View>
)

export const CardContainer = ({ children }) => (
  <ScrollView>
    <View style={styles.cardContainer}>{children}</View>
  </ScrollView>
)
