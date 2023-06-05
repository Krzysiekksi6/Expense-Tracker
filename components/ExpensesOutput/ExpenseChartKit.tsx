/* eslint-disable */
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {LineChart, BarChart} from 'react-native-chart-kit';

const ExpenseChartKit = ({expenses}) => {
  function createChartData(expenses) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentMonth = new Date().getMonth();
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousPreviousMonth = previousMonth === 0 ? 11 : previousMonth - 1;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextNextMonth = nextMonth === 11 ? 0 : nextMonth + 1;

    const chartData = {
      labels: [
        months[previousPreviousMonth].slice(0, 3),
        months[previousMonth].slice(0, 3),
        months[currentMonth].slice(0, 3),
        months[nextMonth].slice(0, 3),
        months[nextNextMonth].slice(0, 3),
      ],
      datasets: [
        {
          data: [0, 0, 0, 0, 0],
        },
      ],
    };

    expenses.forEach(expense => {
      const date = new Date(expense.date);
      const month = date.getMonth();
      if (
        month === previousPreviousMonth ||
        month === previousMonth ||
        month === currentMonth ||
        month === nextMonth ||
        month === nextNextMonth
      ) {
        chartData.datasets[0].data[month - previousPreviousMonth] +=
          expense.amount;
      }
    });

    return chartData;
  }

  const chartData = createChartData(expenses);
  return (
    <View style={styles.container}>
      <BarChart
        data={chartData}
        width={Dimensions.get('window').width * 0.9} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ExpenseChartKit;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
