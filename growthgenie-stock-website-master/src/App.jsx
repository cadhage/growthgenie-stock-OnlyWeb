// App.js
import { useState, useEffect } from "react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./assets/styles.css";
import MainContent from "./components/MainContent";
import Register from "./components/Register";
import ClientScreen from "./components/ClientScreen";
import LogoImage from "./assets/clair-logo-white.svg";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [fdData, setFdData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mfData, setMfData] = useState([]);
  const [stoeksData, setStokesData] = useState([]);
  const [highNetWorthInvestorData, setHighNetWorthInvestorsData] = useState([]);
  const [historicalReturnsData, setHistoricalReturnsData] = useState([]);
  const [taxAssessmentData, setTaxAssessmentData] = useState([]);
  const [historicalData, sethistoricalData] = useState([]);
  const [password, setPassword] = useState("");
  console.log(taxAssessmentData);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    // Add other fields as needed
  });
  setHighNetWorthInvestorsData;
  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  const [userType, setUserType] = useState(""); // Assuming userType is set accordingly

  // Functions for handling login actions
  const handleClientLogin = () => {
    // Logic for client login
    setUserType("client");
  };

  const handleAdminLogin = () => {
    // Logic for admin login
    setUserType("admin");
  };
  const handleMutualFundClick = () => {
    setSelectedItem("Mutual Funds");

    setMfData([
      {
        FUNDNAME: "UTI Mutual Fund",
        FUNDMANAGER: "Ankit Agarwal",
        NAV: 30.12,
        INVESTMENTACCOUNTID: "MXYM51972354297159",
        INVESTMENTDATE: "Wed Mar 30 14:07:36 IST 2022",
        FUNDTYPE: "Income",
        INVESTMENTAMOUNT: 1.3601378e7,
        MUTUALFUNDID: 1145,
      },
      {
        FUNDNAME: "Aditya Birla Sun Life Mutual Fund",
        FUNDMANAGER: "Bhupesh Bameta",
        NAV: 30.16,
        INVESTMENTACCOUNTID: "SXZV93836513511970",
        INVESTMENTDATE: "Thu Jun 09 02:33:55 IST 2011",
        FUNDTYPE: "Debt",
        INVESTMENTAMOUNT: 2.2951979e7,
        MUTUALFUNDID: 1321,
      },
      {
        FUNDNAME: "Kotak Mahindra Mutual Fund",
        FUNDMANAGER: "Harsha Upadhyaya",
        NAV: 30.24,
        INVESTMENTACCOUNTID: "FDLY36577647672688",
        INVESTMENTDATE: "Sun Apr 16 10:03:15 IST 2006",
        FUNDTYPE: "Fixed Maturity",
        INVESTMENTAMOUNT: 7.6246426e7,
        MUTUALFUNDID: 3716,
      },
      {
        FUNDNAME: "Equities - Axis Mutual Fund",
        FUNDMANAGER: "Jinesh Gopani",
        NAV: 30.28,
        INVESTMENTACCOUNTID: "LRDI37518249824411",
        INVESTMENTDATE: "Sun Oct 30 01:16:07 IST 2011",
        FUNDTYPE: "Debt",
        INVESTMENTAMOUNT: 1.9195596e7,
        MUTUALFUNDID: 2408,
      },
      {
        FUNDNAME: "ICICI Prudential Mutual Fund",
        FUNDMANAGER: "Sankaran Naren",
        NAV: 30.34,
        INVESTMENTACCOUNTID: "NESY90575113475798",
        INVESTMENTDATE: "Sat Jul 03 02:19:09 IST 2004",
        FUNDTYPE: "Equity",
        INVESTMENTAMOUNT: 5.3171145e7,
        MUTUALFUNDID: 3928,
      },
      {
        FUNDNAME: "DSP Mutual Fund",
        FUNDMANAGER: "Vinit Sambre",
        NAV: 30.36,
        INVESTMENTACCOUNTID: "MXDZ21993488216680",
        INVESTMENTDATE: "Thu Sep 03 08:45:22 IST 2020",
        FUNDTYPE: "Pension",
        INVESTMENTAMOUNT: 1.3246416e7,
        MUTUALFUNDID: 1870,
      },
      {
        FUNDNAME: "PPFAS Mutual Fund",
        FUNDMANAGER: "Rajeev Thakkar",
        NAV: 30.43,
        INVESTMENTACCOUNTID: "IADY88865060559953",
        INVESTMENTDATE: "Wed Sep 08 08:40:12 IST 2004",
        FUNDTYPE: "Pension",
        INVESTMENTAMOUNT: 5.4040657e7,
        MUTUALFUNDID: 1594,
      },
      {
        FUNDNAME: "Canara Robeco Mutual Fund",
        FUNDMANAGER: "Shridatta Bhandwaldar",
        NAV: 30.44,
        INVESTMENTACCOUNTID: "UGSW17394710819902",
        INVESTMENTDATE: "Sun Jan 03 11:49:22 IST 2021",
        FUNDTYPE: "Growth",
        INVESTMENTAMOUNT: 9.7244311e7,
        MUTUALFUNDID: 3308,
      },
      {
        FUNDNAME: "DSP Mutual Fund",
        FUNDMANAGER: "Vinit Sambre",
        NAV: 30.48,
        INVESTMENTACCOUNTID: "UGLH62779856137269",
        INVESTMENTDATE: "Fri Apr 22 05:43:03 IST 2016",
        FUNDTYPE: "Capital Protection",
        INVESTMENTAMOUNT: 2.3913961e7,
        MUTUALFUNDID: 1482,
      },
      {
        FUNDNAME: "Equities - Axis Mutual Fund",
        FUNDMANAGER: "Jinesh Gopani",
        NAV: 30.52,
        INVESTMENTACCOUNTID: "VZSX03701896388241",
        INVESTMENTDATE: "Mon Jul 12 21:20:00 IST 2004",
        FUNDTYPE: "Capital Protection",
        INVESTMENTAMOUNT: 8558680,
        MUTUALFUNDID: 1478,
      },
    ]);
  };
  const handleFixedDepositeClick = () => {
    setSelectedItem("Fixed Deposits");
    setFdData([
      {
        FixedDepositID: 2667,
        MaturityAmount: 9035217,
        PercentageGrowth: 80773.764769,
        MaturityDate: "2019-11-20",
        InterestRate: 6.64,
        InterestPaymentFrequency: "Half Yearly",
        PrincipalAmount: 11172,
      },
      {
        FixedDepositID: 1230,
        MaturityAmount: 8908747,
        PercentageGrowth: 80507.555194,
        MaturityDate: "2020-04-24",
        InterestRate: 8.42,
        InterestPaymentFrequency: "Half Yearly",
        PrincipalAmount: 11052,
      },
      {
        FixedDepositID: 2283,
        MaturityAmount: 8799083,
        PercentageGrowth: 59998.920839,
        MaturityDate: "2020-04-04",
        InterestRate: 6.86,
        InterestPaymentFrequency: "Monthly",
        PrincipalAmount: 14641,
      },
      {
        FixedDepositID: 2496,
        MaturityAmount: 7637660,
        PercentageGrowth: 57507.934832,
        MaturityDate: "2020-09-20",
        InterestRate: 6.76,
        InterestPaymentFrequency: "Quarterly",
        PrincipalAmount: 13258,
      },
      {
        FixedDepositID: 1915,
        MaturityAmount: 6433367,
        PercentageGrowth: 57294.65608,
        MaturityDate: "2021-03-31",
        InterestRate: 7.55,
        InterestPaymentFrequency: "Weekly",
        PrincipalAmount: 11209,
      },
      {
        FixedDepositID: 3946,
        MaturityAmount: 8601391,
        PercentageGrowth: 53742.823161,
        MaturityDate: "2022-02-23",
        InterestRate: 6.56,
        InterestPaymentFrequency: "Quarterly",
        PrincipalAmount: 15975,
      },
      {
        FixedDepositID: 2822,
        MaturityAmount: 6855853,
        PercentageGrowth: 47486.957729,
        MaturityDate: "2021-02-18",
        InterestRate: 7.42,
        InterestPaymentFrequency: "Daily",
        PrincipalAmount: 14407,
      },
      {
        FixedDepositID: 1768,
        MaturityAmount: 6523289,
        PercentageGrowth: 47477.047626,
        MaturityDate: "2022-05-05",
        InterestRate: 8.29,
        InterestPaymentFrequency: "Monthly",
        PrincipalAmount: 13711,
      },
      {
        FixedDepositID: 2825,
        MaturityAmount: 5184259,
        PercentageGrowth: 46274.979873,
        MaturityDate: "2021-05-30",
        InterestRate: 6.63,
        InterestPaymentFrequency: "Quarterly",
        PrincipalAmount: 11179,
      },
      {
        FixedDepositID: 2281,
        MaturityAmount: 5885151,
        PercentageGrowth: 44694.877455,
        MaturityDate: "2022-11-07",
        InterestRate: 7.19,
        InterestPaymentFrequency: "Half Yearly",
        PrincipalAmount: 13138,
      },
    ]);
  };
  const handleTopStokesClick = () => {
    setSelectedItem("Stocks");
    setStokesData([
      {
        StockExchange: "BSE",
        StockID: 2418,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 28,
        PurchasePrice: 107,
        PriceChangePercentage: 24829.766355,
      },
      {
        StockExchange: "NSE",
        StockID: 2201,
        CurrentPrice: 24235.05,
        StockName: " NESTLEIND",
        Quantity: 83,
        PurchasePrice: 106,
        PriceChangePercentage: 22763.254717,
      },
      {
        StockExchange: "NSE",
        StockID: 2108,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 49,
        PurchasePrice: 119,
        PriceChangePercentage: 22315.840336,
      },
      {
        StockExchange: "BSE",
        StockID: 1020,
        CurrentPrice: 24235.05,
        StockName: " NESTLEIND",
        Quantity: 20,
        PurchasePrice: 133,
        PriceChangePercentage: 18121.842105,
      },
      {
        StockExchange: "NSE",
        StockID: 3531,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 11,
        PurchasePrice: 158,
        PriceChangePercentage: 16782.816456,
      },
      {
        StockExchange: "NSE",
        StockID: 2157,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 33,
        PurchasePrice: 164,
        PriceChangePercentage: 16165.152439,
      },
      {
        StockExchange: "NSE",
        StockID: 2845,
        CurrentPrice: 24235.05,
        StockName: " NESTLEIND",
        Quantity: 47,
        PurchasePrice: 150,
        PriceChangePercentage: 16056.7,
      },
      {
        StockExchange: "BSE",
        StockID: 1842,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 88,
        PurchasePrice: 174,
        PriceChangePercentage: 15230.373563,
      },
      {
        StockExchange: "NSE",
        StockID: 1360,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 13,
        PurchasePrice: 181,
        PriceChangePercentage: 14637.486188,
      },
      {
        StockExchange: "BSE",
        StockID: 2403,
        CurrentPrice: 26674.85,
        StockName: " SHREECEM",
        Quantity: 95,
        PurchasePrice: 184,
        PriceChangePercentage: 14397.201087,
      },
    ]);
  };
  const handleHighNetWorthInvestorsClick = () => {
    setSelectedItem("High-Net-Worth Investors");
    // .get("http://localhost:8081/api/data/get/customer/details/one")
    setHighNetWorthInvestorsData([
      {
        TotalAccountBalance: 9.8391022e8,
        TotalMutualFundValue: 1.787275068e10,
        FirstName: "Kelly",
        TotalAssets: 2.00459359057e10,
        CustomerID: 2018,
        LastName: "Kelly",
        TotalStockValue: 2.99986017e7,
        TotalFixedDepositValue: 1.159276404e9,
        TaxLiability: 2.00459359057e9,
      },
      {
        TotalAccountBalance: 5.03478375e8,
        TotalMutualFundValue: 1.760395088e10,
        FirstName: "Carla",
        TotalAssets: 1.9997821049e10,
        CustomerID: 1466,
        LastName: "Walker",
        TotalStockValue: 1.2027392e7,
        TotalFixedDepositValue: 1.878364402e9,
        TaxLiability: 1.9997821049e9,
      },
      {
        TotalAccountBalance: 7.73465592e8,
        TotalMutualFundValue: 1.5669130896e10,
        FirstName: "Sarah",
        TotalAssets: 1.78436569064e10,
        CustomerID: 2017,
        LastName: "Peterson",
        TotalStockValue: 2.37969624e7,
        TotalFixedDepositValue: 1.377263456e9,
        TaxLiability: 1.78436569064e9,
      },
      {
        TotalAccountBalance: 7.93742985e8,
        TotalMutualFundValue: 1.5277908238e10,
        FirstName: "David",
        TotalAssets: 1.68595842746e10,
        CustomerID: 2131,
        LastName: "Santana",
        TotalStockValue: 8505063.6,
        TotalFixedDepositValue: 7.79427988e8,
        TaxLiability: 1.68595842746e9,
      },
      {
        TotalAccountBalance: 2.02680144e8,
        TotalMutualFundValue: 1.446970425e10,
        FirstName: "Holly",
        TotalAssets: 1.557223114695e10,
        CustomerID: 1268,
        LastName: "Thompson",
        TotalStockValue: 6645352.95,
        TotalFixedDepositValue: 8.932014e8,
        TaxLiability: 1.557223114695e9,
      },
    ]);
    sethistoricalData([
      {
        TotalAccountBalance: 9.8391022e8,
        TotalMutualFundValue: 1.787275068e10,
        FirstName: "Kelly",
        TotalAssets: 2.00459359057e10,
        CustomerID: 2018,
        LastName: "Kelly",
        TotalStockValue: 2.99986017e7,
        TotalFixedDepositValue: 1.159276404e9,
        TaxLiability: 2.00459359057e9,
      },
      {
        TotalAccountBalance: 5.03478375e8,
        TotalMutualFundValue: 1.760395088e10,
        FirstName: "Carla",
        TotalAssets: 1.9997821049e10,
        CustomerID: 1466,
        LastName: "Walker",
        TotalStockValue: 1.2027392e7,
        TotalFixedDepositValue: 1.878364402e9,
        TaxLiability: 1.9997821049e9,
      },
      {
        TotalAccountBalance: 7.73465592e8,
        TotalMutualFundValue: 1.5669130896e10,
        FirstName: "Sarah",
        TotalAssets: 1.78436569064e10,
        CustomerID: 2017,
        LastName: "Peterson",
        TotalStockValue: 2.37969624e7,
        TotalFixedDepositValue: 1.377263456e9,
        TaxLiability: 1.78436569064e9,
      },
      {
        TotalAccountBalance: 7.93742985e8,
        TotalMutualFundValue: 1.5277908238e10,
        FirstName: "David",
        TotalAssets: 1.68595842746e10,
        CustomerID: 2131,
        LastName: "Santana",
        TotalStockValue: 8505063.6,
        TotalFixedDepositValue: 7.79427988e8,
        TaxLiability: 1.68595842746e9,
      },
      {
        TotalAccountBalance: 2.02680144e8,
        TotalMutualFundValue: 1.446970425e10,
        FirstName: "Holly",
        TotalAssets: 1.557223114695e10,
        CustomerID: 1268,
        LastName: "Thompson",
        TotalStockValue: 6645352.95,
        TotalFixedDepositValue: 8.932014e8,
        TaxLiability: 1.557223114695e9,
      },
    ]);
  };

  const handleHistoricalReturnsClick = () => {
    setSelectedItem("Historical Returns");
    setHistoricalReturnsData([
      {
        TransactionType: "Wire Transfers",
        FirstName: "Holly",
        Amount: 24913,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-08-18",
      },
      {
        TransactionType: "Cash Withdrawals",
        FirstName: "Holly",
        Amount: 36605,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-11-28",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Holly",
        Amount: 15624,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-12-22",
      },
      {
        TransactionType: "Checks",
        FirstName: "Carla",
        Amount: 34019,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-03",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Carla",
        Amount: 45842,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-13",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Carla",
        Amount: 35349,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-28",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Sarah",
        Amount: 37391,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2021-12-17",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Sarah",
        Amount: 12056,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-04-08",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Sarah",
        Amount: 22055,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-05-13",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Sarah",
        Amount: 37977,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-06-11",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Sarah",
        Amount: 11548,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-12-20",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 45088,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-01-30",
      },
      {
        TransactionType: "Cash Withdrawals",
        FirstName: "Sarah",
        Amount: 42779,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-02-14",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 39463,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-03-03",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Sarah",
        Amount: 39042,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-04-27",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 8059,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-05-26",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 48465,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-01-11",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 35449,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-01-22",
      },
      {
        TransactionType: "Checks",
        FirstName: "Kelly",
        Amount: 19965,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-03-14",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 3427,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-05-11",
      },
      {
        TransactionType: "Checks",
        FirstName: "Kelly",
        Amount: 4586,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-07-25",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Kelly",
        Amount: 40969,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-08-29",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 33267,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-09-13",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 12302,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-09-16",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 3038,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2023-02-10",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "David",
        Amount: 40528,
        CustomerID: 2131,
        LastName: "Santana",
        TransactionDate: "2023-03-17",
      },
    ]);
    setTaxAssessmentData([
      {
        TransactionType: "Wire Transfers",
        FirstName: "Holly",
        Amount: 24913,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-08-18",
      },
      {
        TransactionType: "Cash Withdrawals",
        FirstName: "Holly",
        Amount: 36605,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-11-28",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Holly",
        Amount: 15624,
        CustomerID: 1268,
        LastName: "Thompson",
        TransactionDate: "2022-12-22",
      },
      {
        TransactionType: "Checks",
        FirstName: "Carla",
        Amount: 34019,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-03",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Carla",
        Amount: 45842,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-13",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Carla",
        Amount: 35349,
        CustomerID: 1466,
        LastName: "Walker",
        TransactionDate: "2023-07-28",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Sarah",
        Amount: 37391,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2021-12-17",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Sarah",
        Amount: 12056,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-04-08",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Sarah",
        Amount: 22055,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-05-13",
      },
      {
        TransactionType: "Wire Transfers",
        FirstName: "Sarah",
        Amount: 37977,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-06-11",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Sarah",
        Amount: 11548,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2022-12-20",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 45088,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-01-30",
      },
      {
        TransactionType: "Cash Withdrawals",
        FirstName: "Sarah",
        Amount: 42779,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-02-14",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 39463,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-03-03",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Sarah",
        Amount: 39042,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-04-27",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Sarah",
        Amount: 8059,
        CustomerID: 2017,
        LastName: "Peterson",
        TransactionDate: "2023-05-26",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 48465,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-01-11",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 35449,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-01-22",
      },
      {
        TransactionType: "Checks",
        FirstName: "Kelly",
        Amount: 19965,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-03-14",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 3427,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-05-11",
      },
      {
        TransactionType: "Checks",
        FirstName: "Kelly",
        Amount: 4586,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-07-25",
      },
      {
        TransactionType: "Deposit",
        FirstName: "Kelly",
        Amount: 40969,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-08-29",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 33267,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-09-13",
      },
      {
        TransactionType: "Withdrawal",
        FirstName: "Kelly",
        Amount: 12302,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2022-09-16",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "Kelly",
        Amount: 3038,
        CustomerID: 2018,
        LastName: "Kelly",
        TransactionDate: "2023-02-10",
      },
      {
        TransactionType: "Online Payments",
        FirstName: "David",
        Amount: 40528,
        CustomerID: 2131,
        LastName: "Santana",
        TransactionDate: "2023-03-17",
      },
    ]);
  };

  const handleTaxAssessmentClick = () => {
    setSelectedItem("Tax Assessment");
    setTaxAssessmentData([
      {
        TotalAccountBalance: 9.8391022e8,
        TotalMutualFundValue: 1.787275068e10,
        FirstName: "Kelly",
        TotalAssets: 2.00459359057e10,
        CustomerID: 2018,
        LastName: "Kelly",
        TotalStockValue: 2.99986017e7,
        TotalFixedDepositValue: 1.159276404e9,
        TaxLiability: 2.00459359057e9,
      },
      {
        TotalAccountBalance: 5.03478375e8,
        TotalMutualFundValue: 1.760395088e10,
        FirstName: "Carla",
        TotalAssets: 1.9997821049e10,
        CustomerID: 1466,
        LastName: "Walker",
        TotalStockValue: 1.2027392e7,
        TotalFixedDepositValue: 1.878364402e9,
        TaxLiability: 1.9997821049e9,
      },
      {
        TotalAccountBalance: 7.73465592e8,
        TotalMutualFundValue: 1.5669130896e10,
        FirstName: "Sarah",
        TotalAssets: 1.78436569064e10,
        CustomerID: 2017,
        LastName: "Peterson",
        TotalStockValue: 2.37969624e7,
        TotalFixedDepositValue: 1.377263456e9,
        TaxLiability: 1.78436569064e9,
      },
      {
        TotalAccountBalance: 7.93742985e8,
        TotalMutualFundValue: 1.5277908238e10,
        FirstName: "David",
        TotalAssets: 1.68595842746e10,
        CustomerID: 2131,
        LastName: "Santana",
        TotalStockValue: 8505063.6,
        TotalFixedDepositValue: 7.79427988e8,
        TaxLiability: 1.68595842746e9,
      },
      {
        TotalAccountBalance: 2.02680144e8,
        TotalMutualFundValue: 1.446970425e10,
        FirstName: "Holly",
        TotalAssets: 1.557223114695e10,
        CustomerID: 1268,
        LastName: "Thompson",
        TotalStockValue: 6645352.95,
        TotalFixedDepositValue: 8.932014e8,
        TaxLiability: 1.557223114695e9,
      },
    ]);
  };

  return (
    <div className="app">
      <Header
        handleClientLogin={handleClientLogin}
        handleAdminLogin={handleAdminLogin}
        userType={userType}
      />
      <div className="content">
        <SidebarLeft
          handleMutualFundClick={handleMutualFundClick}
          handleFixedDepositeClick={handleFixedDepositeClick}
          handleTopStokesClick={handleTopStokesClick}
          userType={userType}
          handleHighNetWorthInvestorsClick={handleHighNetWorthInvestorsClick}
          handleHistoricalReturnsClick={handleHistoricalReturnsClick}
          handleTaxAssessmentClick={handleTaxAssessmentClick}
        />
        <main className="main-content">
          {/* Main content goes here */}
          {/* <p>Main Content Area</p> */}
          {/* <MainContent selectedItem={selectedItem} /> */}
          <ClientScreen
            handleMutualFundClick={handleMutualFundClick}
            handleFixedDepositeClick={handleFixedDepositeClick}
            handleTopStokesClick={handleTopStokesClick}
            userType={userType}
            handleHighNetWorthInvestorsClick={handleHighNetWorthInvestorsClick}
            handleHistoricalReturnsClick={handleHistoricalReturnsClick}
            handleTaxAssessmentClick={handleTaxAssessmentClick}
          />
          {/* <LeftSidebar  /> */}
          {/* <TopPerformingFDs /> */}
          {/* <YourComponent /> */}
          {selectedItem === "Mutual Funds" && (
            <div>
              <h3>
                <b>Top Performing Mutual Funds</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Fund Name</th>
                      <th scope="col">Fund Maneger</th>
                      <th scope="col">NAV</th>
                      <th scope="col">Investment Amount</th>
                      <th scope="col">Mutual Fund ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mfData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.FUNDNAME}</td>
                        <td>{item.FUNDMANAGER}</td>
                        <td>{item.NAV}</td>
                        <td>{item.INVESTMENTAMOUNT}</td>
                        <td>{item.MUTUALFUNDID}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Stocks" && (
            <div>
              <h3>
                <b>Top Performing Stocks</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Stoke Id</th>
                      <th scope="col">Stoke Name</th>
                      <th scope="col">Stoke Enchange</th>
                      <th scope="col">Purchase Price</th>
                      <th scope="col">Current Price</th>
                      <th scope="col">Price Change In %</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stoeksData.map((item, StockID) => (
                      <tr key={StockID}>
                        <td>{item.StockID}</td>
                        <td>{item.StockName}</td>
                        <td>{item.StockExchange}</td>
                        <td>{item.PurchasePrice}</td>
                        <td>{item.CurrentPrice}</td>
                        <td>{item.PriceChangePercentage}</td>
                        <td>{item.Quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Fixed Deposits" && (
            <div>
              <h3>
                <b>Top Performing Fixed Deposits</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">FD Id</th>
                      <th scope="col">Maturity Amount</th>
                      <th scope="col">% Growth</th>
                      <th scope="col">Maturity Date</th>
                      <th scope="col">InterestRate</th>
                      <th scope="col">Interest Payment Frequency</th>
                      <th scope="col">Principal Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fdData.map((item, FixedDepositID) => (
                      <tr key={FixedDepositID}>
                        <td>{item.FixedDepositID}</td>
                        <td>{item.MaturityAmount}</td>
                        <td>{item.PercentageGrowth}</td>
                        <td>{item.MaturityDate}</td>
                        <td>{item.InterestRate}</td>
                        <td>{item.InterestPaymentFrequency}</td>
                        <td>{item.PrincipalAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "High-Net-Worth Investors" && (
            <div>
              <h3>
                <b>High-Net-Worth Investor Information</b>
              </h3>
              <br />
              <div className="table-responsive">
                <div>
                  <h5>
                    <b>Total Assets</b>
                  </h5>
                  <h5>
                    {highNetWorthInvestorData.map((investor, index) => (
                      <span key={index}>
                        {"   "}
                        {Math.floor(investor.TotalAssets / 100000)} {"  L  "}
                      </span>
                    ))}
                  </h5>
                </div>
              </div>
              <div className="App">
                {/* <ResponsiveContainer width="100%" height="100%"> */}
                <BarChart
                  width={570}
                  height={500}
                  data={historicalData}
                  margin={{
                    top: 20,
                    right: -10,
                    left: 37,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="FirstName" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="TotalAccountBalance"
                    stackId="a"
                    fill="#8884d8"
                  />
                  <Bar
                    dataKey="TotalMutualFundValue"
                    stackId="a"
                    fill="#82ca9d"
                  />
                  <Bar dataKey="TotalStockValue" stackId="a" fill="#82ca00" />
                  <Bar
                    dataKey="TotalFixedDepositValue"
                    stackId="a"
                    fill="#82c230"
                  />
                </BarChart>
                {/* </ResponsiveContainer> */}
              </div>
            </div>
          )}
          {selectedItem === "Historical Returns" && (
            <div>
              <h3>
                <b>Historical returns high-net-worth investors</b>
              </h3>
              <br />
              <div className="table-responsive">
                <table className="investor-table table table-striped table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Customer ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Transaction Date</th>
                      <th scope="col">Transaction Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicalReturnsData.map((investor, index) => (
                      <tr key={index}>
                        <td>{investor.CustomerID}</td>
                        <td>{investor.FirstName}</td>
                        <td>{investor.LastName}</td>
                        <td>{investor.Amount}</td>
                        <td>{investor.TransactionDate}</td>
                        <td>{investor.TransactionType}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {selectedItem === "Tax Assessment" && (
            <div>
              <h3>
                <b>Tax Assessment high-net-worth investors</b>
              </h3>
              <br />
              <div className="App">
                <BarChart
                  width={500}
                  height={300}
                  data={taxAssessmentData}
                  margin={{
                    top: 50,
                    right: 0,
                    left: 70,
                    bottom: 0,
                  }}
                  barSize={33}
                >
                  <XAxis
                    dataKey="FirstName"
                    scale="point"
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar
                    dataKey="TaxLiability"
                    fill="#8884d8"
                    background={{ fill: "#eee" }}
                  />
                </BarChart>
              </div>
            </div>
          )}
          {selectedItem === "" && (
            <div className="container">
              <h2>
                <b>About Company</b>
              </h2>
              <br />
              <h3>
                <i>
                  Intelligence is Accelerating <br />
                  Human Transformation
                </i>
              </h3>
              <br />
              <div>
                <p>
                  <i>
                    Through the sands of time, humans have always looked for
                    newer ways of advancing their quality of life. Right through
                    the evolution of agriculture through the industrial and
                    internet revolution, we have always changed the center of
                    gravity, steadily and rapidly, to advance humanity. We are
                    living in times of constant change, and looking at a future
                    where the power of technology is harnessed by human
                    innovation. Following the Great Reset of 2020, the center of
                    gravity for data is rapidly shifting from on-prem to the
                    cloud. As enterprises make this shift, we at Clairvoyant
                    look at continually unlocking the power of data and
                    analytics, and deriving deeper insights to advance humanity.
                  </i>
                </p>
              </div>
            </div>
          )}
        </main>
        <SidebarRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
