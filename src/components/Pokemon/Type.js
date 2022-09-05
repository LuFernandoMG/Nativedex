import { View, Text, StyleSheet } from 'react-native';
import { capitalize, map } from 'lodash';
import getColorByType from '../../utils/getColorByType';

export default function Type({ types }) {
  
  return (
    <View style={styles.content}>
      {map(types, (item, idx) => (
          <View key={idx} style={{...styles.pill, backgroundColor: getColorByType(item.type.name)}}>
              <Text style={styles.text}>{capitalize(item.type.name)}</Text>
          </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    }
});