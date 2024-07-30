import { Item } from '@/components/account/Item';
import { Profile } from '@/components/account/Profile';
import RateAppSheet, { RateAppSheetMethods } from '@/components/account/RateAppSheet';
import { Title } from '@/components/common/Title';
import HowToUseIcon from '@/components/icons/account/HowToUse';
import ShareIcon from '@/components/icons/account/Share';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AccountInfo } from '@/types';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feedback from '@/components/icons/account/Feedback';
import Conditions from '@/components/icons/account/Conditions';
import Help from '@/components/icons/account/Help';
import LogOut from '@/components/icons/account/LogOut';

const AccountDetails: AccountInfo = {
  fullName: "Nicolas Ramella",
  phoneNumber: "+1 (201) 304 6705",
  imageUrl: "https://picsum.photos/seed/696/3000/2000"
};

export default function Favourits() {
  const rateAppSheetRef = useRef<RateAppSheetMethods>(null);

  const openSheet = () => {
    rateAppSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <Title title='Account' />
        <Profile props={AccountDetails} />
        <View style={styles.items}>
          <Item title='How to use Portalys' icon={<HowToUseIcon />} onPress={openSheet} />
          <Item title='Share the app' icon={<ShareIcon />} />
          <Item title='Rate the app' icon={<AntDesign name="star" size={24} color="white" />} />
          <Item title='Give us your feedback' icon={<Feedback />} />
          <Item title='Terms and Conditions' icon={<Conditions />} />
          <Item title='Need help? Get in touch' icon={<Help />} />
          <Item title='Log Out' icon={<LogOut />} />
        </View>
        <RateAppSheet ref={rateAppSheetRef} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  items: {
    gap: 15,
  }
});
