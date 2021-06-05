import React, { Component } from 'react';
import { View, Button, TextInput, ScrollView, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import firebase from '../database/firebase';
import Loader from '../components/loader';

{/* var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var loaderAnimation = false; */}

class regForm extends Component {

    // This is the inital state
    constructor(props) {
        super(props);

        this.state = {
            firstName:'',
            lastName:'',
            age:'',
            childrenQty:'',
            city:'',
            phone:'',
            neighborhood:'',
            email: '',
            loading: false,
        };

    }


    async saveNewUser(){
        
        this.setState({ loading: true });

        await firebase.db.collection('users').add({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            childrenQty: this.state.childrenQty,
            city: this.state.city,
            phone: this.state.phone,
            neighborhood: this.state.neighborhood,
            email: this.state.email,
        });
        { /* loaderAnimation=false; */}
        this.setState({ loading: false });
        alert("Registro exitoso");
    }

    render() {
        return(

            <View style={styles.container}>
            
                <Loader loading={this.state.loading}/>

                <ScrollView>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Nombres" 
                            onChangeText={ (value) => this.setState({ firstName: value}) } 
                        /> 
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Apellidos"
                            onChangeText={ (value) => this.setState({ lastName: value})} 
                        />
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Edad"
                            onChangeText={ (value) => this.setState({ age: value})} 
                        />
                            
                    </View>
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="# hijos"
                            onChangeText={ (value) => this.setState({ childrenQty: value})} 
                        />
        
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Ciudad"
                            onChangeText={ (value) => this.setState({ city: value})} 
                        />
        
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Celular"
                            onChangeText={ (value) => this.setState({ phone: value})} 
                        />
        
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Barrio"
                            onChangeText={ (value) => this.setState({ neighborhood: value})} 
                        />
        
                    </View>
        
                    <View style={styles.inputGroup} >
                        <TextInput 
                            placeholder="Correo electrónico"
                            onChangeText={ (value) => this.setState({ email: value})} 
                        />
        
                    </View>
        
                    <View style={styles.inputGroup} >
                        <Button 
                            title="Registrarse"
                            onPress={ () => this.saveNewUser() }
        
                        />
                    </View>

                </ScrollView>
            
            </View>
        )
    }

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