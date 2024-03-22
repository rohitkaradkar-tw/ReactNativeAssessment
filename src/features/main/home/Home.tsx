
import { StyleSheet, Text, View , ActivityIndicator,Image, ScrollView} from 'react-native'
import { useEffect ,useState} from 'react' ;
import React from 'react'
import { fetchProducts } from '../../../service/ProductsService';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Home() {
  const [loading,setLoading]=useState(true);
  const [response,setResponse]=useState<any>([]);
  const [error,setError]=useState();
  const {colors} =useTheme();

  useEffect(()=>{
    fetchProducts()
      .then(
        (result)=>{
          setLoading(false);
          setResponse(result);
        },
        ((err)=>{
          setLoading(false);
          setError(err.message);
        })
        )
  },[]);

  const displayProducts = () => {
    return (
      <ScrollView >
    {response.map((product:any, index:number) => (
      
      <View key={index} style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: product.image }}
          style={{ width: 200, height: 200, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold',color:colors.text }}>{product.title}</Text>
        <Text style={{color:colors.text}}>Price: ${product.price}</Text>
        <Text style={{color:colors.text}}>ratings : {product.rating.rate}</Text>
      </View>
    ))}
    </ScrollView>
    )
  };


  const getActivity=()=>{
    if(loading){
    return <ActivityIndicator size={'large'} />
    }
    if(error){
      return<Text>Error ocuured while calling Api : {error}</Text>
    }
    console.log(response)
    return(
      <View>
        {displayProducts()}
      </View>)
  }
  return (
    <ScrollView>
    <View>
      {getActivity()}
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})