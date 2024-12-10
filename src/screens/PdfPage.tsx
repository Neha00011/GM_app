import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

export default function PdfPage() {
  const source = {
    uri: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    cache: true,
  };
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(
          numberOfPages: number,
          filePath: string | undefined,
        ) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page: number) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error: any) => {
          console.log(error);
        }}
        onPressLink={(uri: string) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
