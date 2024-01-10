import { View, StyleSheet, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button color="black" title="Consultar" onPress={() => navigation.navigate('Consultar')}/>
            <View style={styles.espaco} />
            <Button color="black" title="Registrar" onPress={() => navigation.navigate('Registrar')}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eeeeee',
        padding: 2,
    },
    espaco:{
        height:10
    }
});