import React, {useEffect, useState} from "react";
import { View } from "react-native";
import Aviso from "./components/aviso";
import NetInfo from '@react-native-community/netinfo'

export default function App() {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() =>{
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  },[]);
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isConnected === null ? (
        <Aviso texto="verificando conexão..." isConnected={isConnected}/>
      ):isConnected ? (
        <Aviso texto="conectando à internet" isConnected={isConnected}/>
      ) : (
        <Aviso texto="desconectando da internet" isConnected={isConnected}/>
      )}
    </View>
  );
}