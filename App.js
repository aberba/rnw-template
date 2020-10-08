import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styled from "styled-components/native";
// import Icon from 'react-native-vector-icons/FontAwesome';


// Dimensions.addEventListener("change", ()=> {

// })

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Container = styled.View`
    flex-direction: row;
    color: red;
    width: ${width}px;
    height: ${height}px;
    background-color: red;
`;

const SideBar = styled.View`
    width: 300px;
    height: 100%;
    padding: 1rem;
    background-color: white;
`;

const Content = styled.View`
    width: 100%;
    /* width: 800px; */
    height: 100%;
    background-color: white;
    border-color: #dddfe2;
    border-left-width: 1px;
`;

// const MyText = styled.Text`
//     color: #333333;
// `;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >

          <Container>
            <SideBar>
              <Text>hello</Text>
            </SideBar>

            <Content>
              <Text>Hello</Text>
            </Content>

          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default App;
