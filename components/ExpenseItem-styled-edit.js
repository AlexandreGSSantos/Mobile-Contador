// Importa React e o hook useState para controle de estado

import React, {useState} from 'react';

//Importa os componentes nativos para construção de inteface

import {
    View,
    TextImput,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert
} from 'react-native';

// Component principal

export default HomeScreen(){
    // Estado para os campos do formulario
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [gastos, setGastos] = useState([]);
    const [editandoId, setEditandoId] = useState(null);

    // Função ára adicionar um novo gasto ou atualizar um existente

    const adicionarOuAtualizarGastos = () =>{
        //Validação campos não podem estar vazios
        if(!descricao || !valor){
            Alert.alert('ERRO', 'preencha todos os campos');
            return;
        }
    }
}
