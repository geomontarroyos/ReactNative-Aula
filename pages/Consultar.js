import { Text, StyleSheet, SafeAreaView } from "react-native";
import { Card } from 'react-native-paper';
import { useState, useEffect } from "react";
import Artista from "../services/Artista";

export default function Consultar() {
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        const buscar = async () => {
            const lista = await Artista.findAll();
            setArtistas(lista);
        }
        buscar();
    }, [])

    return (
    <SafeAreaView style={styles.container}>
        { artistas?.map((art)=> (
            <Card key={art.id}>
                <Text style={styles.paragraph}>{art.nome_artistico}</Text>
                <Text style={styles.paragraph}>{art.genero}</Text>
            </Card>
        ))}
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});