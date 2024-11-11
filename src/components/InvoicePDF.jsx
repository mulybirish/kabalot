import React from "react";
import { Page, Document, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    marginBottom: 10,
  },
});

const InvoicePDF = ({ invoiceData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <div className="sender-address">
        <Text style={{ fontWeight: "600" }}>Gili Hanaor</Text>
        <Text>Ueckermünder str. 7 10439 Berlin</Text>
        <Text>Telefon: +49 176 67459187</Text>
        <Text>E-Mail: gilily200@gmail.com</Text>
        <Text>
          <Text style={{ fontWeight: "600" }}>Steuernummer</Text>: 31 230 03096
        </Text>
        <Text>Datum: {invoiceData.date}</Text>
      </div>
      <div className="client-details">
        <Text>
          An:{" "}
          <Text style={{ fontWeight: "600" }}>{invoiceData.clientName}</Text>
        </Text>
        <Text>{invoiceData.address}</Text>
      </div>
      <Text>
        Für den Auftrag erlaube ich mir, folgenden Betrag in Rechnung zu
        stellen:
      </Text>
      <hr />
      <div className="invoice-details">
        <Text>Rechnungsnummer: {invoiceData.invoiceNumber}</Text>
        <Text>Datum/Auftrag: {invoiceData.date}</Text>
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
                <Text>{invoiceData.Quantity}</Text>
              </td>
              <td>
                <Text>{invoiceData.price}&euro;</Text>
              </td>
              <td>
                <Text>{invoiceData.description}</Text>
              </td>
              <td>
                <Text>{invoiceData.price}&euro;</Text>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="footer">
        <Text>Gesamt (netto): {invoiceData.price}&euro;</Text>
        <Text>*Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</Text>
        <Text style={{ fontWeight: "600", fontSize: ".9rem" }}>
          Ich bedanke mich für den Auftrag und verbleibe mit freundlichen
          Grüßen!
        </Text>
        <Text>Gili Hanaor</Text>
        <Text>Deutsche bank 2353878</Text>
        <Text style={{ fontWeight: "600" }}>
          IBAN: DE78 1007 0124 0235 3878 00
        </Text>
      </div>
    </Page>
  </Document>
);

export default InvoicePDF;
