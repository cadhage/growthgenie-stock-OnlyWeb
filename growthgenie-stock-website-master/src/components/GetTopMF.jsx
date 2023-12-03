import { useState, useEffect } from "react";

const GetTopMF = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [mfData, setMfData] = useState([]);

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

  const fetchTopPerformingMF = () => {
    fetch("http://localhost:8080/api/topperformingmf") // Replace with your API endpoint
      .then((response) => response.json())
      .then((result) => {
        setMfData(result); // Store fetched MF data in state
      })
      .catch((error) => {
        console.error("Error fetching Mutual Fund data:", error);
      });
  };

  return (
    <div className="main-container">
      {/* Code for toggle button and mobile view */}
      {/* ... */}
      {/* Button to fetch top performing MF data */}
      <button onClick={fetchTopPerformingMF}>Fetch Top MF Data</button>
      {/* Display fetched Mutual Fund data */}
      <table>
        <thead>
          <tr>
            <th>Fund Name</th>
            <th>Performance</th>
            {/* Add other necessary columns */}
          </tr>
        </thead>
        <tbody>
          {mfData.map((item, index) => (
            <tr key={index}>
              <td>{item.fundName}</td>
              <td>{item.performance}</td>
              {/* Add other necessary columns */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContain;
