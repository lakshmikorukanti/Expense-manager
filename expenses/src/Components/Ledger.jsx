import React, { useEffect,useLayoutEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { transactionData } from "../Redux/ledger/action";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  { id: "user_id", label: "UserId", maxWidth: 100 },
  {
    id: "type",
    label: "type",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount",
    label: "amount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "timestamp",
    label: "timestamp",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

export default function Ledger() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.user);
  var TData = useSelector((state) => state.app.TData);
  let data = [...TData];
  const dispatch = useDispatch();
  // console.log(TData, "tdataa");
  const [l, setdata] = useState([]);

  useEffect(() => {
    console.log(user, "inside useEffect");
    dispatch(transactionData(user));
  }, []);
  // useEffect(() => {}, [TData]);
  const [value, setValue] = React.useState(0);

  // console.log(l, "data", TData);
  console.log(data);
  const handleChange = (event, newValue) => {
    if (newValue == 0) {
      setdata(data);
      data = [];
    } else if (newValue == 1) {
      let m = TData.filter((a) => a.type == "credit");
      console.log(m, "credit");
      setdata(m);
      data = [];
    } else if (newValue == 2) {
      let n = TData.filter((a) => a.type == "debit");
      console.log(n, "debit");
      setdata(n);
      data = [];
    }
    setValue(newValue);
  };
  const rows = l.length == 0 ? [...data] : [...l];
  console.log(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (TData.length > 0) {
    return (
      <>
        <h1>Ledger</h1>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="All" />
            <Tab label="Credit" />
            <Tab label="Debit" />
          </Tabs>
        </Paper>
        <div style={{ margin: "30px" }}>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];

                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{
                                  color:
                                    column.label == "type"
                                      ? row.type == "debit"
                                        ? "red"
                                        : "green"
                                      : "black",
                                }}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </>
    );
  } else {
    return <div>empty</div>;
  }
}
