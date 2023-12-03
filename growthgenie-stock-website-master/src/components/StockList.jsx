// StockList.js
import { useState, useEffect } from "react";
import axios from "axios";

const StockList = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Fetch stock data from an API
    axios
      .get("your_stock_api_endpoint")
      .then((response) => {
        // Process the data and set it to state
        setStockData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="stock-list">
      {/* Display stock items/cards */}
      {stockData.map((stock) => (
        <div className="stock-item" key={stock.id}>
          {/* Render individual stock data */}
          <p>
            {stock.name}: ${stock.price}
          </p>
          {/* Add more stock details */}
        </div>
      ))}
    </div>
  );
};

export default StockList;
