import { getSquats } from "../services/getSquats";
import { getBench } from "../services/getBench";
import { getDeadlift } from "../services/getDeadlift";
import React, { useState, useEffect } from "react";

export default function MainContainer(props) {
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
      console.log(deadlift)
        } catch (error) {
          console.log(`You bombed out of deadlifts with a ${error}`)
        }
    }
    fetchSquats();
    fetchBench();
    fetchDeadlift();
  }, [])
  

  return (
    <h1>Hi</h1>
  )
}