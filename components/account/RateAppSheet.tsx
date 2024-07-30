import React from "react"
import { StyleSheet, Text, View } from "react-native";
import BottomSheet from 'reanimated-bottom-sheet';

type TProps = {
    ref: React.Ref<any>,
}
const RateAppSheet = ({ref} : TProps) => {
    const renderContent = () => (
        <View style={styles.content}>
          <Text>My Bottom Sheet Content</Text>
        </View>
      );
    
      const renderHeader = () => (
        <View style={styles.header}>
          <Text>My Bottom Sheet Header</Text>
        </View>
      );
    return (
        <BottomSheet
        ref={ref}
        snapPoints={[300, 0]}
        renderContent={renderContent}
        renderHeader={renderHeader}
        />
    )
}

const styles = StyleSheet.create({
    content: {
      padding: 20,
      backgroundColor: 'white',
    },
    header: {
      backgroundColor: 'gray',
      padding: 10,
      alignItems: 'center',
    },
  });

export default RateAppSheet;