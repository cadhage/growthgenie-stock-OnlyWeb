// import { useState } from "react";

// const MainContain = () => {
//   const [data, setData] = useState([]);

//   const fetchData = () => {
//     fetch("http://localhost:8080/api/topwealthiest") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result); // Store fetched data in state
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   return (
//     <div className="main-container">
//       <button onClick={fetchData}>Fetch Data</button>
//       <table>
//         <thead>
//           <tr>
//             <th>ACCOUNTID</th>
//             <th>CUSTOMERID</th>
//             <th>ACCOUNTTYPE</th>
//             <th>ACCOUNTBALANCE</th>
//             <th>ACCOUNTSTATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.ACCOUNTID}</td>
//               <td>{item.CUSTOMERID}</td>
//               <td>{item.ACCOUNTTYPE}</td>
//               <td>{item.ACCOUNTBALANCE}</td>
//               <td>{item.ACCOUNTSTATUS}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MainContain;
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainContain = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setShowButtons(false); // Hide buttons when switching to larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  const fetchData = () => {
    fetch("http://localhost:8080/api/topwealthiest") // Replace with your API endpoint
      .then((response) => response.json())
      .then((result) => {
        setData(result); // Store fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="main-container">
      {isMobile && (
        <button className="menu-btn" onClick={toggleButtons}>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </button>
      )}
      {showButtons && (
        <div className={`horizontal-menu${isMobile ? " mobile-view" : ""}`}>
          <button className="menu-item">Stokes</button>
          <button className="menu-item">Mutual Funds</button>
          <button className="menu-item">Fixed Deposit</button>
        </div>
      )}
      <button onClick={fetchData}>Fetch Data</button>
      <table>
        <thead>
          <tr>
            <th>ACCOUNTID</th>
            <th>CUSTOMERID</th>
            <th>ACCOUNTTYPE</th>
            <th>ACCOUNTBALANCE</th>
            <th>ACCOUNTSTATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.ACCOUNTID}</td>
              <td>{item.CUSTOMERID}</td>
              <td>{item.ACCOUNTTYPE}</td>
              <td>{item.ACCOUNTBALANCE}</td>
              <td>{item.ACCOUNTSTATUS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContain;
