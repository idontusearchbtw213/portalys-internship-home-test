import { Item } from '@/components/account/Item'
import { Profile } from '@/components/account/Profile'
import RateAppSheet from '@/components/account/RateAppSheet'
import { Title } from '@/components/common/Title'
import HowToUseIcon from '@/components/icons/account/HowToUse'
import { Colors } from '@/constants/Colors'
import { AccountInfo } from '@/types'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// in real situation we will get it from the store(zustand or redux..)
const AccountDetails: AccountInfo = {
  fullName: "Nicolas Ramella",
  phoneNumber: "+1 (201) 304 6705",
  imageUrl: "https://picsum.photos/seed/696/3000/2000"
}



export default function Favourits() {
  const rateAppSheetRef = React.useRef(null);


  const openSheet = (sheetRef: React.RefObject<any>) => {
    sheetRef?.current?.snapTo(0)
  }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Title title='Account' />
        <Profile props={AccountDetails} />
        <View style={styles.items}>
          <Item title='How to use Portalys' icon={<HowToUseIcon />} onPress={() => openSheet(rateAppSheetRef)} />
          <Item title='How to use Portalys' icon={<HowToUseIcon />} />
          <Item title='How to use Portalys' icon={<HowToUseIcon />} />
          <Item title='How to use Portalys' icon={<HowToUseIcon />} />
          <Item title='How to use Portalys' icon={<HowToUseIcon />} />
          <Item title='How to use Portalys' icon={<HowToUseIcon />} />

        </View>
        <RateAppSheet ref={rateAppSheetRef} />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    gap: 20,
  },
  wrapper: {
    gap: 50
  },
  text: {
    color: Colors.shared.red,
    fontSize: 18
  },
  items: {
    gap: 15
  }
})