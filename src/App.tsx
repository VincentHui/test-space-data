import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
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
      console.log(res);
    };
    get();
  }, []);
  return <></>;
}

export default App;
