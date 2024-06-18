import { useEffect, useRef, useState } from "react";
import Preload from "./Preload.jsx";
import Home from "./Home.jsx";

export default function () {
  const [load, setLoad] = useState(true);
  // 固定必须加载至少1.5s

  const timeout = useRef(null);
  useEffect(() => {
    timeout.current = setTimeout(() => {
      setLoad(false)
    }, 2000)
    return () => {
      clearTimeout(timeout.current)
    }
  }, [load])

  return (
      <>
        {load && <Preload/>}
        {!load && <Home/>}
      </>
  )
}