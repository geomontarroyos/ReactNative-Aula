import { Button, Card, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Artista from "../services/Artista";


export default function Registrar() {
    const [artista, setArtista] = useState({
        nomeArtistico: "",
        genero: ""
    });
    const salvar = () =>{
        Artista.create(artista);
    }
    return (
        <SafeAreaView  style={styles.container}>
            <Card.Content  style={styles.cardContent}>
                <TextInput
                    label="Nome do Artista"
                    style={styles.input}
                    onChangeText={(texto) => {
                        setArtista({ ...artista, nomeArtistico: texto })
                    }}>
                </TextInput>
                <TextInput
                    label="Gênero"
                    style={styles.input}
                    onChangeText={(texto) => {
                        setArtista({ ...artista, genero: texto })
                    }}>
                </TextInput>
                <Button 
                   title="Register"
                   style={styles.button}
                    onPress={salvar}
                ></Button>
            </Card.Content>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 16,
      },
      cardContent: {
        maxHeight: 350,
        padding: 16,
      },
      input: {
        marginBottom: 16,
      },
      button: {
        color: 'white',
        backgroundColor: 'black',
        marginTop: 16,
      },
});