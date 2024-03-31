import React from "react";
import { Dropdown, Pagination, SplitButton } from "react-bootstrap";

const PaginationComponent = ({totalItems, itemsPerPage, currentPage}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <SplitButton variant={"dark"} title={itemsPerPage}>
          <Dropdown.Item eventKey="1">10</Dropdown.Item>
          <Dropdown.Item eventKey="2">20</Dropdown.Item>
          <Dropdown.Item eventKey="3">30</Dropdown.Item>
          <Dropdown.Item eventKey="4">40</Dropdown.Item>
        </SplitButton>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div>
          Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
        </div>

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
};

export default PaginationComponent;
