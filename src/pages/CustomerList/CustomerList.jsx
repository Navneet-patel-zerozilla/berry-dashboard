import React from "react";
import classes from "./customerlist.module.css";
import GlobalDashboardLayout from "../../Layout/GlobalDashboardLayout";

// MUI

import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import {
  Badge,
  Chip,
  Divider,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

function createData(id, customerDetail, location, orders, registered, status) {
  return {
    id: id,
    CustomerName: (
      <div className={classes.customer_detail}>
        <span>{customerDetail.name}</span>
        <span>{customerDetail.email}</span>
      </div>
    ),
    Location: <p>{location}</p>,
    Orders: <p>{orders}</p>,
    Registered: <p>{registered}</p>,
    Status: <p className={classes.status}>{status}</p>,
    Action: (
      <div>
        <Tooltip title="See">
          <IconButton color="rgb(33, 150, 243);">
            <RemoveRedEyeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton color="rgb(103, 58, 183);">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </div>
    ),
  };
}

const rows = [
  createData(
    1,
    { name: "Customer Name", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue",
    "4628",
    "05-02-2023",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    2,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    3,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    4,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    5,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    6,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    7,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    8,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    9,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    10,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    11,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    12,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
  createData(
    13,
    { name: "Customer Name 2", email: "customer@example.com" },
    "No.471, 1st Floor, 80ft Road, Aman Avenue 2",
    "46282",
    "05-02-2022",
    "processing",
    { see: "See", delete: "Delete" }
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    id: "location",
    numeric: true,
    disablePadding: false,
    label: "Location",
  },
  {
    id: "orders",
    numeric: true,
    disablePadding: false,
    label: "Orders",
  },
  {
    id: "registered",
    numeric: true,
    disablePadding: false,
    label: "Registered",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  if (!numSelected) return;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : null}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
}

const CustomerListHeading = () => {
  return (
    <>
      <div className={classes.table_heading}>
        <p>Customer List</p>
      </div>
      <Divider />
    </>
  );
};

const FilterArea = () => {
  return (
    <div className={classes.filters}>
      <OutlinedInput
        type="text"
        placeholder="Search customer"
        id="outlined-adornment-search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="outlined-search-helper-text"
        inputProps={{
          "aria-label": "search",
        }}
        size="small"
        className={classes.filter_search}
      />
      <div className={classes.filter_icons}>
        <Tooltip title="Copy List">
          <IconButton>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Print List">
          <IconButton>
            <LocalPrintshopIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

// MUI

const CustomerList = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <GlobalDashboardLayout>
      <div className={classes.container}>
        <Box sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", mb: 2 }}>
            <CustomerListHeading />
            <FilterArea />
            <EnhancedTableToolbar numSelected={selected.length} />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.CustomerName}
                        </TableCell>
                        <TableCell align="left">{row.Location}</TableCell>
                        <TableCell align="left">{row.Orders}</TableCell>
                        <TableCell align="left">{row.Registered}</TableCell>
                        <TableCell align="left">{row.Status}</TableCell>
                        <TableCell align="left">{row.Action}</TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </div>
    </GlobalDashboardLayout>
  );
};

export default CustomerList;
