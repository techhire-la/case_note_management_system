import React from "react";
import { Pagination } from "semantic-ui-react";

const ClientPagination = props => {
  const { activePage, itemsCount, pageSize, onPageChange } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;

  return (
    <div>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ClientPagination;
