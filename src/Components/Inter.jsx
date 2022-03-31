import React,{useState,useEffect} from "react";
import axios from "axios";

const Inter = () => {
  const [data, setData] = useState([]);
  const Getapi = async() => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(result.data);
    console.log(">====",result);
  };
  useEffect(() => {
    Getapi();
  }, []);
  return <div>
      {
          data.map((item)=>{
              return(
                  <div>
                      {/* <h3>hello</h3> */}
                      <h1>{item.title}</h1>
                      <h2>{item.completed}</h2>
                  </div>
              )
          })
      }
  </div>;
};

export default Inter;
