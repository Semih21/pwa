import React from "react";
import video from "./videos/sculpture.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Art Videos</h1>
        <div>
          <video src={video} controls height={200}></video>
        </div>
      </header>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// import "./App.css";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch("http://orangevalleycaa.org/api/videos").then(
//         response => response.json()
//       );
//       setData(result);
//     };
//     fetchData();
//   }, []);
//   return (
//     <div className="App">
//       <header>
//         <h1> Art Videos</h1>
//         {data.map(video => (
//           <div key={video.id}>
//             <h2>{video.name}</h2>
//             <video src={video.video_url} controls height={200}></video>
//           </div>
//         ))}
//       </header>
//     </div>
//   );
// }
