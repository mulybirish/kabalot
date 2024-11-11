import "../App.css";
import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { formContext } from "../App";
import PDFGenerator from "./PDFGenerator";
import InvoicePDF from "./InvoicePDF";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Invoice = ({ state }) => {
  //   const { state } = useContext(formContext);
  console.log(state, "state from invoice");
  const invoiceData = state; // Replace with the actual invoice data

  return (
    <div className="invoice-container">
      <Pdf targetRef={ref} filename={state.date + "-invoice.pdf"}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <div className="sender-address">
          <p style={{ fontWeight: "600" }}>Gili Hanaor</p>
          <p>Ueckermünder str. 7 10439 Berlin</p>
          <p>Telefon: +49 176 67459187</p>
          <p>E-Mail: gilily200@gmail.com</p>
          <p>
            <span style={{ fontWeight: "600" }}>Steuernummer</span>: 31 230
            03096
          </p>
          <span>Datum: {state.date}</span>
        </div>
        <div className="client-details">
          <p>
            An: <span style={{ fontWeight: "600" }}> {state.clientName}</span>
          </p>
          <p>{state.address}</p>
        </div>
        <div>
          Für den Auftrag erlaube ich mir, folgenden Betrag in Rechnung zu
          stellen:
        </div>
        <hr />
        <div className="invoice-details">
          <h2>Rechnung</h2>
          <p>Rechnungsnummer: {state.invoiceNumber}</p>
          <p>Datum/Auftrag: {state.date}</p>
        </div>
        <div className="item-table">
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Preis</th>
                <th>Beschreibung/Menge</th>
                <th>Betrag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{state.Quantity}</p>
                </td>
                <td>
                  <p>{state.price}&euro;</p>
                </td>
                <td>
                  <p>{state.description}</p>
                </td>
                <td>
                  <p>{state.price * state.Quantity}&euro;</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <hr /> */}
        <div className="footer">
          <p>Gesamt (netto): {state.price * state.Quantity}&euro; </p>
          <p>*Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</p>
          <p style={{ fontWeight: "600", fontSize: ".9rem" }}>
            Ich bedanke mich für den Auftrag und verbleibe mit freundlichen
            Grüßen!
          </p>
          <p>Gili Hanaor</p>
          <p>Deutsche bank 2353878</p>
          <p style={{ fontWeight: "600" }}>IBAN: DE78 1007 0124 0235 3878 00</p>
        </div>
      </div>

      {/* <button onClick={downloadInvoice}>download</button> */}
    </div>
  );
};

export default Invoice;
