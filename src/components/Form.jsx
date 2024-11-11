import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { formContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Form = () => {
  const { handleChange, state } = useContext(formContext);
  const navigate = useNavigate();
  const saveInvoiceToLocalStorage = (invoiceData) => {
    // Get existing invoices from local storage
    const existingInvoices = localStorage.getItem("invoices");

    // Parse existing invoices as JSON or initialize with an empty array
    const invoices = existingInvoices ? JSON.parse(existingInvoices) : [];

    // Add the new invoice data to the invoices array
    invoices.unshift(invoiceData);

    // Save the updated invoices array back to local storage
    localStorage.setItem("invoices", JSON.stringify(invoices));
  };

  const generateInvoice = () => {
    // Logic to generate the invoice using the entered form data
    // You can access the form data from the `state` object
    console.log("Generating invoice...");
    console.log("Form data:", state);
    saveInvoiceToLocalStorage({ ...state });

    // Redirect to the invoice page
    navigate("/invoice");
  };

  return (
    <div className="forn">
      Name :{" "}
      <input
        type="text"
        name="clientName"
        value={state.clientName}
        onChange={handleChange}
      />
      Address:{" "}
      <input
        type="text"
        name="address"
        value={state.address}
        onChange={handleChange}
      />
      Date :{" "}
      <input
        type="date"
        name="date"
        value={state.date}
        onChange={handleChange}
      />
      Invoice number:{" "}
      <input
        type="number"
        name="invoiceNumber"
        value={state.invoiceNumber}
        onChange={handleChange}
      />
      Pos(quantity):{" "}
      <input
        type="number"
        name="Quantity"
        value={state.Quantity}
        onChange={handleChange}
      />
      Price:{" "}
      <input
        type="number"
        name="price"
        value={state.price}
        onChange={handleChange}
      />
      Description:{" "}
      <input
        type="text"
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      {/* amount: <input type="number" name="totalAmount" onChange={handleChange} />
      netto: <input type="number" name="netto" onChange={handleChange} /> */}
      <button onClick={generateInvoice}>Generate invoice</button>
    </div>
  );
};

export default Form;
