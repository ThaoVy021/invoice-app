import React from "react";
import ContentLayout from "../../layouts/Content";
import FilterBar from "../../components/InvoiceCreater/FilterBar";
import Content from "../../components/InvoiceCreater/Content";
import Footer from "../../components/InvoiceCreater/Footer";

export default function CreateNew() {
  return (
    <>
      <ContentLayout
        searchBar={<FilterBar />}
        tableView={<Content />}
        actionBar={<Footer />}
      />
    </>
  );
}
