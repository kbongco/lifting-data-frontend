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
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        data: weightLifted,
      }
    ]
  }

 
  return (
    <>
    <h1>Deadlifts</h1>
    <section>
        <Line data={data}/>
      </section> 
      <article>
        <h1>What is this data?</h1>
        </article>
    </>
  )
}