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
          "Access-Control-Allow-Origin": "*",
        },
      });
      // console.log(res.data);
      console.log(Items);
      console.log(res.data.queryResult.Items);
      ItemSetter(res.data.queryResult.Items);
    };
    get();
  }, []);
  return (
    <>
      {Items.map((itm: any) => (
        <div>
          Id : {itm.Id.S}
          Id : {itm.temp1.N}
          Id : {itm.power1.N}
          Id : {itm.power2.S}
        </div>
      ))}
    </>
  );
}

export default App;
