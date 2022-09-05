import { View, Text, StyleSheet } from 'react-native'
import { capitalize, map } from 'lodash'
import getColorByType from '../../utils/getColorByType';

export default function Stats({ stats, type }) {

  const barStyles = (num) => {
      const color = num > 49 ? getColorByType(type) : "#ff3e3e";
      return {
          backgroundColor: color,
          width: `${num}%`,
      }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {map(stats, (item, idx) => (
          <View key={idx} style={styles.block}>
              <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
              </View>
              <View style={styles.blockInfo}>
                  <Text style={styles.number}>{item.base_stat}</Text>
                  <View style={styles.bgBar}>
                    <View style={[styles.bar, barStyles(item.base_stat)]} />
                  </View>
              </View>
          </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
        color: "#999"
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    blockTitle: {
        width: "35%",
    },
    statName: {
        fontSize: 12,
        color: "#6b6b6b",
    },
    blockInfo: {
        width: "65%",
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: "12%",
        fontSize: 12,
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar: {
        height: 5,
        borderRadius: 20,
    }
});
