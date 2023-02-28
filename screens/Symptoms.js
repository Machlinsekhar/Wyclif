import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Alert,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  export default function Symptoms () {
    const navigation = useNavigation();
    return (
      <SafeAreaView style ={styles.sectionContainer}>
 
    <ImageBackground source={require('../assests/bg.png')} style ={styles.sectionimage}>
    <View style={styles.sectionview}>
          <Text style={styles.sectionTitle}>Symptoms</Text>
        </View>
        <View style={styles.sectionend}>
        <TouchableOpacity  onPress={() => navigation.navigate('Start')} style={styles.sectionsys}>
              <ImageBackground source={require('../assests/flow.png')}>
              <Text style={styles.sym} ></Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Start')} style={styles.sectionsys}>
              <ImageBackground source={require('../assests/discharge.png')}>
              <Text style={styles.sym} ></Text>
              </ImageBackground>
            </TouchableOpacity>
            </View><View style={styles.sectionend}>
            <TouchableOpacity  onPress={() => navigation.navigate('Start')} style={styles.sectionsys}>
              <ImageBackground source={require('../assests/pain.png')}>
              <Text style={styles.sym} ></Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('Start')} style={styles.sectionsys}>
              <ImageBackground source={require('../assests/mood.png')}>
              <Text style={styles.sym} ></Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
      </ImageBackground>
     </SafeAreaView>
   );
    }
    const styles = StyleSheet.create({
        sectionContainer: {
          flex: 1,
          backgroundColor: '#BEDCE6'
        },
        sectionimage: {
          flex: 1,
        },
        sectionTitle: {
          fontSize: 45,
          fontWeight: '900',
          color: `#0F2F5B`,
          fontStyle: 'italic',
          textAlign: 'center',
          paddingTop: 90,
          paddingBottom: 30,
        },
        sectioncode: {
          fontSize: 21,
          color: '#0F2F5B',
          textAlign: 'center',
          fontWeight: '700',
          paddingBottom: 20,
          paddingTop: 220,
          letterSpacing: 1.25
        },
      
        sectionview: {
          paddingBottom: 20,
        },
        sectionsys: {
            backgroundColor: '#6359A6',
            borderRadius: 10,
            width: 160,
            height: 85,
            marginTop: 25,
            marginHorizontal: 20
          },
      
        form: {
          paddingHorizontal: 20,
          paddingTop: 30
        },
      
        input: {
          backgroundColor: `#c0d1da`,
          borderRadius: 6,
          width: 360,
          marginBottom: 15,
          borderColor: "#BEDCE6",
          borderWidth: 2,
          fontSize: 17,
          paddingHorizontal: 20,
        },
      
        label: {
          color: '#0F2F5B',
          fontWeight: '600',
          fontSize: 20,
          paddingTop: 10,
          paddingBottom: 10
       },
      
        sectionbutton: {
          alignItems: "center",
          marginTop: 40
      
        },
      
        button: {
          backgroundColor: '#6359A6',
          borderRadius: 6,
          width: 360,
          height: 45,
          marginTop: 25,
      
        },
      
        buttonText: {
          textAlign: 'center',
          fontSize: 20,
          color: '#ffffff',
          paddingTop: 10,
          fontWeight: '600'
        },
        sectionend: {
          flexDirection: "row"
        },
        endline: {
          fontSize: 17,
          color: '#0F2F5B',
          textAlign: 'center',
          fontWeight: '800',
          paddingBottom: 20,
          paddingTop: 20,
          letterSpacing: 1,
          flex: 1.3
        },
        link: {
          fontSize: 17,
          color: '#07BB9C',
          fontWeight: '900',
          paddingBottom: 20,
          paddingTop: 20,
          letterSpacing: 1,
          flex: 0.5
        },
        sectionimage: {
            flex:1,},
        sym:{
            paddingTop: 20,
            paddingBottom: 50,
        }
      });
 
   
   