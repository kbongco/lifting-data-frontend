import { getSquats } from "../services/getSquats";
import { getBench } from "../services/getBench";
import { getDeadlift } from "../services/getDeadlift";
import React, { useState, useEffect } from "react";
import Deadlifts from "../Components/Deadlifts";
import Squats from "../Components/Squats";
import Bench from "../Components/Bench";
import About from '../Views/About/About';
import Home from '../Views/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from "../Views/UnderConstruction/UnderConstruction";


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
      <section>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path="/about" element={<About />} exact />
          <Route path="/squats" element={<Squats squats={squats} />} exact />
          <Route path="/bench" element={<Bench bench={bench} />} exact />
          <Route path="/deadlifts" element={<Deadlifts deadlift={deadlift} /> } exact />
          <Route path='/meet-results' element={<UnderConstruction/>} exact /> 
        </Routes>
      </section>
    </>
  )
}