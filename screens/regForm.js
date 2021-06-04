import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import firebase from '../database/firebase';

{/* var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var loaderAnimation = false; */}

const regForm = () => {

    // This is the inital state
    const [state, setstate] = useState({
        firstName:'',
        lastName:'',
        age:'',
        childrenQty:'',
        city:'',
        phone:'',
        neighborhood:'',
        email: ''
    });

    const handleChangeText = (name, value) => {
        setstate({...state, [name]: value});
    };

    const saveNewUser = async () => {
        {/* loaderAnimation=true; */}
        await firebase.db.collection('users').add({
            firstName: state.firstName,
            lastName: state.lastName,
            age: state.age,
            childrenQty: state.childrenQty,
            city: state.city,
            phone: state.phone,
            neighborhood: state.neighborhood,
            email: state.email,
        });
        { /* loaderAnimation=false; */}
        alert("Registro exitoso");
    };




    return(
        <ScrollView style={styles.container} >

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Nombres" 
                    onChangeText={ (value) => handleChangeText('firstName', value)} 
                /> 
            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Apellidos"
                    onChangeText={ (value) => handleChangeText('lastName', value)} 
                />
            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Edad"
                    onChangeText={ (value) => handleChangeText('age', value)}
                />
                    
            </View>
            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="# hijos"
                    onChangeText={ (value) => handleChangeText('childrenQty', value)}
                />

            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Ciudad"
                    onChangeText={ (value) => handleChangeText('city', value)}
                />

            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Celular"
                    onChangeText={ (value) => handleChangeText('phone', value)}
                />

            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Barrio"
                    onChangeText={ (value) => handleChangeText('neighborhood', value)}
                />

            </View>

            <View style={styles.inputGroup} >
                <TextInput 
                    placeholder="Correo electrónico"
                    onChangeText={ (value) => handleChangeText('email', value)}
                />

            </View>

            <View style={styles.inputGroup} >
                <Button 
                    title="Registrarse"
                    onPress={ () => saveNewUser() }

                />
            </View>

{/*             <View style={[styles.containerActInd, styles.horizontal]}>
            <ActivityIndicator
                size="large" 
                color="#00ff00"
                animating={loaderAnimation}
                />
            </View> */}

        </ScrollView>
    )
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
/*      containerActInd:{
        flex: 1,
        zIndex: "1",
        elevation: "1",
        position: 'absolute',
        top: -35,
        left:-30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height-65
        
    }, */
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

export default regForm