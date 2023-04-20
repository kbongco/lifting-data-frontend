import { getSquats } from "../services/getSquats";
import { getBench } from "../services/getBench";
import { getDeadlift } from "../services/getDeadlift";
import React, { useState, useEffect } from "react";
import Deadlifts from "../Components/Deadlifts";
import Squats from "../Components/Squats";
import Bench from "../Components/Bench";
import NavBar from "../Components/NavBar/NavBar";


export default function MainContainer() {
  const [squats, updateSquats] = useState([]);
  const [bench, updateBench] = useState([]);
  const [deadlift, updateDeadlift] = useState([]);

  useEffect(() => {
    const fetchSquats = async () => {
      try {
        const squats = await getSquats();
        updateSquats(squats);
      } catch (error) {
        console.log(`You bombed out of squats with a ${error}`)
      }
    }

    const fetchBench = async () => {
      try {
      const bench = await getBench();
      updateBench(bench);
      } catch (error) {
        console.log(`You bombed out of bench with a ${error}`)
      }
    }

    const fetchDeadlift = async () => {
      try {
      const deadlift = await getDeadlift();
      updateDeadlift(deadlift);
        } catch (error) {
          console.log(`You bombed out of deadlifts with a ${error}`)
        }
    }
    fetchSquats();
    fetchBench();
    fetchDeadlift();
  }, [])
  

  return (
    <>
      <NavBar />
      <h1>Chibi's Adelante winter heat 2022 meet prep singles</h1>
    <section>
        <Squats squats={squats} />
        <Bench bench={bench} />
        <Deadlifts deadlift={deadlift} />
      </section>
    </>
  )
}