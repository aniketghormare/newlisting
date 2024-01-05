import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  // Handle page change
  const handlePageChange = (event, page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };
  console.log(totalPages)
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        color="secondary"
        onChange={handlePageChange}
      />
    </Stack>
  );
}
