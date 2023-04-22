import React, { useEffect, useState } from "react";
import { Text , View, StyleSheet, TextInput, Image, TouchableOpacity, Keyboard, ActivityIndicator} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = ({navigation}) => {
    const [recipes, setRecipes] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [numberOfRecipes, setNumberOfRecipes] = useState('10');
    const [loading, setLoading] = useState(false);

    const apiId = '20d66c29'
    const apiKey = `c67e3dfc954d2190529978929a09aa7a`;
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

    async function apiCall(){
        setLoading(true);
        let resp = await fetch(apiUrl)
        let respJson = await resp.json();
        setRecipes(respJson.hits);
        setLoading(false);
        Keyboard.dismiss()
        setSearchQuery('')
    }
    useEffect(() => {
        setLoading(true)
        apiCall()
    },[])
    

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 43, fontWeight: '800', width: '90%', color:'#ffffff'}}>
                Cram Gaming Recipe App
            </Text>
            <View style={{display:'flex', flexDirection:'row'}}>
                <TextInput placeholder="Search A Recipe" style={styles.inputField} onChangeText={text => setSearchQuery(text)}></TextInput>
                
         

            </View>
            <TouchableOpacity style={styles.button} onPress={apiCall} title='Submit'>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
            <SafeAreaView style={{flex:1}}>
                {loading ? <ActivityIndicator size='large' color='#363b70'/> :
            <FlatList
            style={styles.recipes}
            data={recipes}
            renderItem={({item}) => (
                <View style={styles.recipe}>
                <Image style={styles.image}
                source={{uri:`${item.recipe.image}`}}
                />
                <View style={{padding:20, flexDirection:'row'}}>
                    <Text style={styles.label}>{item.recipe.label}</Text>
                    <TouchableOpacity onPress={() =>{navigation.navigate('Details',{recipe: item.recipe})}}>
                        <Text style={{marginLeft:50, fontWeight: '800', fontSize: 20, color:'#1d1d29'}}>
                            Details
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>
        )}
    keyExtractor={(item, index)=> index.toString()} />}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1d1d29'
    },
    inputField: {
        height: '120%',
        width: '65%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 15,
        width: '100%'
    },
    buttons: {
        flexDirection:'row'
    },
    button: {
        backgroundColor: '#363b70',
        width: '100%',
        alignItems: 'center',
        margin: 15,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20 
    },
    label: {
        fontSize: 15,
        width: '60%',
        color: '#1d1d29',
        fontWeight:'700'
    },
    recipe: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin:10,
        marginBottom: 40
    }
})
export default HomeScreen;
