import { View, FlatList, StyleSheet } from "react-native";

import produtos from "../data/dados";
import { Divider, List } from "react-native-paper";

export default function ProdutosScreen(props) {
    function getProdutoItem({ item: prod }) {
        return (
            <View>
                <List.Item
                    title={prod.nome}
                    description={prod.preco}
                    left={() => <List.Image variant="image"
                        source={{ uri: prod.linkImagem }}
                    />}
                />
                <Divider />
            </View>
        )
    }

    return (
        <View style={estilos.container}>
            <FlatList
                data={produtos}
                keyExtractor={prod => prod.id}
                renderItem={getProdutoItem}
                style={estilos.flatList}
            />
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    flatList: {
        width: "95%"
    }
})
