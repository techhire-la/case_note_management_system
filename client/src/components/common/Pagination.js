import React from "react";
import { Pagination } from "semantic-ui-react";

const ClientPagination = props => {
  const { currentPage, itemsCount, pageSize, onPageChange } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;

  return (
    <div>
      {console.log(currentPage)}
      <Pagination
        // activePage={currentPage}
        defaultActivePage={currentPage} //current page
        firstItem={null} //firstPage
        lastItem={null} //lastPage
        pointing // undelinepage
        secondary // arrow style
        totalPages={totalPages} //totalPages
        // onPageChange={onPageChange}
        onClick={onPageChange}
      />
    </div>
  );
};

export default ClientPagination;
