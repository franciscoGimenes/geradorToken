import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export function CaixaToken() {
    return (
        <Pressable style={ESTILOS.caixa}>
            <Text style={ESTILOS.text}>
                Token salvo
            </Text>
        </Pressable>
    )
}

const ESTILOS = StyleSheet.create({
    caixa:{
        backgroundColor:"#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#fff"
    }
})