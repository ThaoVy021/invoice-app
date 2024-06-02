import React from "react";
import ContentLayout from "../../layouts/Content";

export default function Invoices() {
  return (
    <ContentLayout
      searchBar={<div>Search bar</div>}
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
