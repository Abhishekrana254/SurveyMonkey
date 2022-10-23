import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SwipeablePanel } from 'rn-swipeable-panel';

export default Panel = (props) => {

  const form_data = props.form_data;

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  return (
    <View >
      <Text >Welcome to React Native!</Text>
      <Text >To get started, edit App.js</Text>
      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        {/* <PanelContent /> Your Content Here */}
        <Text>button</Text>
      </SwipeablePanel>
    </View>
  );
};
