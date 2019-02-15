import React from "react";
import { Pagination } from "semantic-ui-react";

const ClientPagination = props => {
  const { currentPage, itemsCount, pageSize } = props;
  const totalPages = Math.ceil(itemsCount / pageSize);

  return (
    <Pagination
      defaultActivePage={currentPage} //current page
      firstItem={null} //firstPage
      lastItem={null} //lastPage
      pointing // undelinepage
      secondary // arrow style
      totalPages={totalPages} //totalPages
    />
  );
};

export default ClientPagination;
