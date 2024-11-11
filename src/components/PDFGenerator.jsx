import React, { useContext, useRef } from "react";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import { formContext } from "../App";
import Invoice from "./Invoice";
import { useNavigate } from "react-router-dom";

const MyDocument = () => (
  <Document>
    <Page>
      <Invoice />
    </Page>
  </Document>
);

const PDFGenerator = () => {
  const { state } = useContext(formContext);
  const navigate = useNavigate();
  const downloadLinkRef = useRef();

  const generatePDF = () => {
    const blob = new Blob([<MyDocument />], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    downloadLinkRef.current.href = url;
    downloadLinkRef.current.click();
    URL.revokeObjectURL(url);

    // Redirect to the invoice page
    navigate("/invoice");
  };

  return (
    <div>
      <PDFDownloadLink
        document={<Invoice state={state} />}
        fileName={state.date + "invoice.pdf"}
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
      </PDFDownloadLink>
      <a ref={downloadLinkRef} style={{ display: "none" }}>
        Download
      </a>
      {/* <button onClick={generatePDF}>Generate PDF</button> */}
    </div>
  );
};

export default PDFGenerator;
