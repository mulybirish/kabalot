import React, { useState, useEffect } from "react";
import Invoice from "./Invoice";
const InvoiceFromLocalStorage = () => {
  const [invoices, setInvoices] = useState([]);
  const getInvoicesFromLocalStorage = () => {
    // Get the invoices from local storage
    const invoices = localStorage.getItem("invoices");

    // Parse the invoices as JSON or return an empty array if there are no invoices
    return invoices ? JSON.parse(invoices) : [];
  };
  useEffect(() => {
    const retrievedInvoices = getInvoicesFromLocalStorage();
    setInvoices(retrievedInvoices);
  }, []);
  console.log(invoices);
  return (
    <div>
      {invoices.map((invoice) => (
        <div style={{ border: "1px solid black" }}>
          <Invoice state={invoice} />
        </div>
      ))}
    </div>
  );
};

export default InvoiceFromLocalStorage;
