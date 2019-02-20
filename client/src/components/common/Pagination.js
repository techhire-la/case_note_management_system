import React from "react";
import { Pagination } from "semantic-ui-react";

const ClientPagination = props => {
  const { activePage, itemsCount, pageSize, onPageChange, clients } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;

  let begin = (activePage - 1) * pageSize;
  let end = begin + pageSize;

  console.log(begin, end);

  let pageList = clients.slice(begin, end);
  console.log(pageList);
  return (
    <div>
      <Pagination
        activePage={activePage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      {pageList}
    </div>
  );
};

export default ClientPagination;
