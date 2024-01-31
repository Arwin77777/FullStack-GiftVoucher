import { Pagination } from 'rsuite';
import React from 'react';
const Page = () => {
  const [activePage, setActivePage] = React.useState(5);

  return (
    <>
      <Pagination
        prev
        last
        next
        first
        size="lg"
        total={100}
        limit={7.5}
        activePage={activePage}
        onChangePage={setActivePage}
        style={{minWidth:'15rem'}}
      />
    </>
  );
};

export default Page;