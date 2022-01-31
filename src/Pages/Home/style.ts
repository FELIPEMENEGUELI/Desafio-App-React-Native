import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native'
import { ProdutoDTO } from "../../dtos/produtoDTO";

export const Container = styled.View`
flex:1;
background-color:#C0C0C0;
`;

export const HeaderConteudo = styled.View`
flex-direction:row;
justify-content:center;
justify-content:space-between;
borderRadius: 10;
`;
export const ProdutosTotal = styled.Text`
margin-top:20px;
margin-right:30px;
font-size: ${RFValue(13)}px;
color:white;
borderRadius: 10;
alignSelf:center
`;

export const ProdList = styled(FlatList as new (props: FlatListProps<ProdutoDTO>) => FlatList<ProdutoDTO>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showVerticalScrollIndicator: false
})``;