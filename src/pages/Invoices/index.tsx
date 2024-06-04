import React from "react";
import ContentLayout from "../../layouts/Content";
import FilterBar from "../../components/Invoices/FilterBar";

export default function Invoices() {
  return (
    <ContentLayout
      searchBar={<FilterBar />}
      tableView={
        <div style={{ height: "100%" }}>
          Table view
          {/* <p>long content</p>
          {
            // indicates very long content
            Array.from({ length: 100 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? "more" : "..."}
                <br />
              </React.Fragment>
            ))
          } */}
        </div>
      }
      actionBar={<div>Action bar</div>}
    />
  );
}
