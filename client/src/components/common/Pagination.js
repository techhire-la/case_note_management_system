import React from "react";
import { Pagination } from "semantic-ui-react";

const ClientPagination = props => {
  const { currentPage, itemsCount, pageSize, onPageChange } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null;

  return (
    <div>
      {/* {console.log(currentPage)} */}
      <Pagination
        activePage={currentPage}
        // onPageChange={e => onPageChange(e.target)}
        // defaultActivePage={currentPage} //current page
        firstItem={null} //firstPage
        lastItem={null} //lastPage
        pointing // undelinepage
        secondary // arrow style
        totalPages={totalPages} //totalPages
        onClick={e => onPageChange(e)}
      />
    </div>
  );
};

export default ClientPagination;
