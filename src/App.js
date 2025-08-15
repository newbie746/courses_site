import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import { apiUrl,filterData } from "./data";
import Navbar from "./Components/Navbar"; // Make sure Navbar.js has a default export
import { Filter } from "./Components/Filter";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";


const App = () => {
  const [courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    try {
        let response =await fetch(apiUrl);
        let output =await response.json();
         ///outout -->
         setCourses(output.data);
      
    } catch (error) {
         toast.error("network me koi dikkat hai");
      
    }
    setLoading(false);
  }

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
      <Navbar />
      </div>

      <div>
      <Filter filterData={filterData}
      category={category}
      setCategory={setCategory} />
      </div>

      <div className="w-11/12 max-w-[1200px] 
      mx-auto flex justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>) :(<Cards courses={courses} category={category}/>)
      }
      </div>

    </div>
  );
};

export default App;
