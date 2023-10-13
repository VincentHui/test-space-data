import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Items, ItemSetter] = useState([]);

  useEffect(() => {
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://eg05cvpjn2.execute-api.eu-west-2.amazonaws.com/stage/queryResults?teamId=test_tbb_char_1.3"
      );

    const get = async () => {
      const res = await axios.get(url, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        // params: { teamId: "test_tbb_char_1.3" },
      });
      console.log(res.data.queryResult.Items);
      ItemSetter(res.data.queryResult.Items);
    };
    get();
  }, []);
  return (
    <>
      {Items.map((i: any) => (
        <div>
          <div>Id : {i.Id.S}</div>
          <div>UnixTimeAdded : {i.UnixTimeAdded.N} </div>
          <div> current1 : {i.current1.N}</div>
          <div className="Item1"> current2 : {i.current2.N}</div>
        </div>
      ))}
    </>
  );
}

export default App;
