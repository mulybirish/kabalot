import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invoice from "./components/Invoice";
import Form from "./components/Form";
import reducer from "./components/reducer";
import "./App.css";
import PDFGenerator from "./components/PDFGenerator";
import MyDocument from "./components/PDFGenerator";
import { Link, PDFViewer } from "@react-pdf/renderer";
import InvoiceFromLocalStorage from "./components/InvoiceFromLocalStorage";
import NavBar from "./components/NavBar";
export const formContext = createContext();

const initialState = {
  clientName: "",
  address: " ",
  date: new Date().toISOString().substr(0, 10),
  invoiceNumber: 0,
  Quantity: 1,
  price: 0,
  description: "",
  totalAmount: 0,
  netto: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "inputChange",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
    console.log(state, "state");
  };

  return (
    <formContext.Provider value={{ handleChange, state }}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/invoice" element={<Invoice state={state} />} />
            <Route
              exact
              path="/allinvoice"
              element={<InvoiceFromLocalStorage />}
            />
          </Routes>

          <NavBar />

          <div>
            <PDFGenerator />
          </div>
        </Router>
      </div>
    </formContext.Provider>
  );
}

export default App;

{
  /* <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Invoice />} />
            <Route path="/addinvoice" element={<Form />} />
          </Routes>
        </div>
      </Router> */
}
