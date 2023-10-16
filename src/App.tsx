import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [items, itemsSetter] = useState([]); //setting state for items

  useEffect(() => {
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://eg05cvpjn2.execute-api.eu-west-2.amazonaws.com/stage/queryResults?teamId=test_tbb_char_1.3"
      );

    // I am saving this spot for the buttons function 


    const get = async () => {
      const res = await axios.get(url, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        // params: { teamId: "test_tbb_char_1.3" },
      });
      console.log(res.data.queryResult.Items);
      itemsSetter(res.data.queryResult.Items)
    };
    get();
  }, []);


  return (
    <>
      <button className="button leftButton"> Left Button </button>
      <button className="button rightButton"> Right Button</button>
      {items.map(
        (obj: any) => {
          return (
            <div>
              <div className="items" key={obj.Items}>
                <div className="item UnixTimeAdded"> UnixTimeAdded: {obj?.UnixTimeAdded.N}</div>
                <div className="item current1"> current1: {obj?.current1.N}</div>
                <div className="item current2"> current2: {obj?.current2.N}</div>
                <div className="item enabledwire4"> enabledwire4: {obj?.enabledwire4.N}</div>
              </div>
            </div>
          )
        })}
    </>
  );
}

export default App;
