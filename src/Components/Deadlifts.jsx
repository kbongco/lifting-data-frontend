import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(...registerables);

export default function Deadlifts(props) {
const { deadlift } = props;


  const weightLifted = deadlift?.map((weights) => weights.weight);
  const weeksOut = deadlift?.map((weeks) => weeks.weeksOut);

  const data = {
    labels: weeksOut,
    datasets: [
      {
        label: 'Deadlift singles for Adelante Winter heat 2022',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: weightLifted,
      }
    ]
  }

  console.log(data);
  return (
    <>
    <h1>Deadlifts</h1>
    <section>
        <Line data={data}/>
    </section> 
    </>
  )
}