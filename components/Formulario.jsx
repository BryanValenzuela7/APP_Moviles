import { StyleSheet,Modal, SafeAreaView, Text, Button, TextInput, View, Pressable, StatusBar, ScrollView } from "react-native"
import CustomButton from "./Button"
import DatePicker from "react-native-date-picker"
import React, { useState } from 'react';
const Formulario =({modalVisible, newDateHandler}) =>{
    const [date, setDate] = useState(new Date())

    return(
        <Modal animationType='slide' visible={modalVisible}>
            <StatusBar backgroundColor={'#333'}/>
            <ScrollView>
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Nueva {''}
            <Text style={styles.titleBold}>Cita</Text>
        </Text>
        <CustomButton title ={'CANCELAR'}
        onPress={()=>{
            newDateHandler()
        }}
        customColor={'#edede9'}
        />
        <View style={styles.group}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nombre paciente" 
            placeholderTextColor={''}/>

            <Text style={styles.label}>Nombre propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nombre propietario" 
            placeholderTextColor={''}/>

            <Text style={styles.label}>Email propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder="Email propietario" 
            placeholderTextColor={''}
            keyboardType='email-address'
            />
            
        </View>
        <View style={styles.group}>
            <Text style={styles.label}>Fecha</Text>
            <DatePicker 
            date={date}
        />
        </View>
        <TextInput style={[styles.input, styles.inputSymptoms]}
        placeholder="Sintomas"
        multiline ={true}
        placeholderTextColor={"#666"}
        />
        <CustomButton title ={'Registrar'}
        onPress={()=>{
            newDateHandler()
        }}
        customColor={'#edede9'}
        />
        </SafeAreaView>
        </ScrollView>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#e3d5ca',
    },
    group:{
        marginTop:10,
        marginHorizontal:30,
        marginBottom:10,
    },
    input:{
        marginTop: 10,
        marginBottom:10,
        backgroundColor: '#d5bdaf',
        padding: 10,
        borderRadius: 12,
      },
      label :{
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
      },
    title: {
        fontSize:30,
        fontWeight: '600',
        textAlign: 'center',  
    },
    titleBold:{
        fontWeight: '900'
    },
    inputSymptoms:{
        height: 100,
        marginBottom: 20,
    }

})
export default Formulario