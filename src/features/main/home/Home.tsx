import { StyleSheet, Text, View , ActivityIndicator} from 'react-native'
import { useEffect ,useState} from 'react' ;
import React from 'react'
import { fetchProducts } from '../../../service/ProductsService';

export default function Home() {
  const [loading,setLoading]=useState(true);
  const [response,setResponse]=useState({});
  const [error,setError]=useState();

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
  },[])

  const getActivity=()=>{
    if(loading){
    return <ActivityIndicator size={'large'} />
    }
    if(error){
      return<Text>Error ocuured while calling Api : {error}</Text>
    }
    console.log(response)
    return<Text>Api called</Text>
  }
  return (
    <View>
      {getActivity()}
     
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})