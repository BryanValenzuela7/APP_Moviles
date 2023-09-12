import { StyleSheet,Modal, SafeAreaView, Text, Button, TextInput, View, Pressable } from "react-native"
import CustomButton from "./Button"
import DatePicker from "react-native-date-picker"
import React, { useState } from 'react';
const Formulario =({modalVisible, newDateHandler}) =>{
    const [date, setDate] = useState(new Date())

    return(
        <Modal animationType='slide' visible={modalVisible}>
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Nueva {''}
            <Text style={styles.titleBold}>Cita</Text>
        </Text>
        <View style={styles.group}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nombre paciente" 
            placeholderTextColor={''}/>

            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nombre paciente" 
            placeholderTextColor={''}/>

            <Text style={styles.label}>Nombre ghj</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nombre paciente" 
            placeholderTextColor={''}/>
        </View>
        <View style={styles.group}>
            <Text style={styles.label}>Fecha</Text>
            <DatePicker 
            date={date}
            
            />
        </View>
        <CustomButton title ={'Registrar'}
        onPress={()=>{
            newDateHandler()
        }}
        customColor={'#edede9'}
        />
        </SafeAreaView>
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

})
export default Formulario