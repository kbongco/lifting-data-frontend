import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

export default function Squats(props) {
  const { bench } = props;

  const weightLifted = bench?.map((weights) => weights.weight);
  const weeksOut = bench?.map((weeks) => weeks.weeksOut);

  const data = {
    labels: weeksOut,
    datasets: [
      {
        label: 'Bench singles for Adelante Winter heat 2022',
        backgroundColor: "#22577a",
        borderColor: "#22577a",
        data: weightLifted,
      }
    ]
  }

  return (
    <>
    <h1>Bench</h1>

    <section>
    <Line data={data}/>
      </section> 
    </>
  )
}