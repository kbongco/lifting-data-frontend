import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
import Table from './Table/Table'
ChartJS.register(...registerables);

export default function Squats(props) {
  const { squats, basicInfo } = props;
  const tHeadInfo = 'Squats';


  const weightLifted = squats?.map((weights) => weights.weight);
  const weeksOut = squats?.map((weeks) => weeks?.weeksOut);

  const data = {
    labels: weeksOut,
    datasets: [
      {
        label: 'Squat singles for Adelante Winter heat 2022',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: weightLifted,
      }
    ]
  }

  return (
    <>
    <h1>Squats</h1>

    <section>
    <Line data={data}/>
      </section> 
      <section>
        <Table tHeadInfo={tHeadInfo} tBodyInfo={squats} tHeaderCol={basicInfo} />
      </section>
    </>
  )
}