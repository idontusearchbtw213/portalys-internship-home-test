import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Asterisk from '../icons/account/Astresik';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import DownToClose from '../icons/account/DownToClose';

export interface RateAppSheetMethods {
  expand: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  snapToPosition: (position: number) => void;
  collapse: () => void;
  forceClose: () => void;
}

const RateAppSheet = forwardRef<RateAppSheetMethods, {}>((_, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const colorScheme = useColorScheme()
  const colors = Colors[colorScheme ?? "light"]
  
  useImperativeHandle(ref, () => ({
    expand: () => bottomSheetRef.current?.expand(),
    close: () => bottomSheetRef.current?.close(),
    snapToIndex: (index: number) => bottomSheetRef.current?.snapToIndex(index),
    snapToPosition: (position: number) => bottomSheetRef.current?.snapToPosition(position),
    collapse: () => bottomSheetRef.current?.collapse(),
    forceClose: () => bottomSheetRef.current?.forceClose(),
  }));

  const renderContent = () => (
    <View style={styles.content}>
        <DownToClose />
      <Text style={{color: "white", fontSize: 20, fontWeight: "bold" }}>How’s Portalys going for you?</Text>
      <View style={[styles.asterisks, { flexDirection: "row"}]}>
        {Array.from({ length: 5, }).map((_, idx) => {
          return <Asterisk  key={idx} />
        })}
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <DownToClose />
    </View>
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      // handleComponent={renderHeader}
      snapPoints={[1, 170]}
      backgroundStyle={[styles.background, {backgroundColor: colors.background}]}
      style={styles.sheet}
    >
      {renderContent()}
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'transparent',
    padding: 10,
    color: "white",
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: "rgba(255,255,255,0.2)",
    gap: 20,
  },
  header: {
    alignItems: 'center',
    borderTopWidth: 1,
    borderRadius: 0,
    borderTopColor: "rgba(255,255,255,0.2)",
    
  },
  asterisks:{
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderRadius: 100,
    padding: 4,
  },
  background: {
   
  },
  sheet:{
    position: "absolute",
    zIndex: 999,
    left: 0,
    top: 0
  }
});

export default RateAppSheet;
