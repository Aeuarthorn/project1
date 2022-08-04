// import React, { useEffect, useState } from 'react';
// // import { styled, alpha } from '@mui/material/styles';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import SendIcon from '@mui/icons-material/Send';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import Add from '../Add'
// // import Delete from '../Delete'
// // import Sendtoline from '../Sendtoline'
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Grid from '@mui/material/Grid';
// import SendIcon from '@mui/icons-material/Send';
// import { Box } from '@mui/material';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import PropTypes from 'prop-types';




// function SimpleDialog(props) {
//     const { onClose, selectedValue, open } = props;


// }
// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,

// };

// export default function CustomizedMenus() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const [rows, setApplyloan] = useState([]);
  
//     useEffect(() => {
      
//       fetch("http://localhost:5000/apply_loan/:id")
      
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setApplyloan(result)
//           },
  
//         )
//     });

//     const [opens, setOpens] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpens(true);
//     };

//     const handleClose = (value) => {
//         setOpens(false);
//         // setSelectedValue(value);
//     };



//     return (
//         <div>

//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',

//                 }}
//             >
//                 <Stack
//                     orientation="vertical"
//                     spacing={1}
//                 >
//                     {/* <Button
//                     variant="contained"
//                     color="primary"
//                     size="small"
//                 >
//                     <Add />
//                 </Button> */}
//                     <Button
//                         variant="contained"
//                         color="success"
//                         size="small"

//                     >
//                         <Dialog onClose={handleClose} open={opens}>
//                             <DialogTitle>ส่งข้อมูลไปยังไลน์</DialogTitle>
//                             <Box
//                                 component="form"
//                                 sx={{
//                                     '& > :not(style)': { m: 1, width: '61.5ch' },
//                                 }}
//                                 noValidate
//                                 autoComplete="off"
//                             >{rows.map((row) => (

//                                 <Box >
//                                     <Grid item xs={8} >
//                                         <TextField
//                                             fullWidth
//                                             id="id"
//                                             label={row.id}
//                                             name="id"
//                                             autoComplete="id"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             fullWidth
//                                             id="date"
//                                             label={row.date}
//                                             name="date"
//                                             autoComplete="date"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             required
//                                             fullWidth
//                                             id="loan_type"
//                                             label={row.loan_type}
//                                             name="loan_type"
//                                             autoComplete="loan_type"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             required
//                                             fullWidth
//                                             id="name"
//                                             label={row.name}
//                                             name="name"
//                                             autoComplete="name"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             required
//                                             fullWidth
//                                             id="address"
//                                             label={row.address}
//                                             name="address"
//                                             autoComplete="address"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             required
//                                             fullWidth
//                                             id="phone"
//                                             label={row.phone}
//                                             name="phone"
//                                             autoComplete="phone"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             fullWidth
//                                             id="detail"
//                                             label={row.detail}
//                                             name="detail"

//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             fullWidth
//                                             id="sale_id"
//                                             label={row.sale_id}
//                                             name="sale_id"
//                                         />
//                                     </Grid>
//                                     <Grid item xs={8}>
//                                         <TextField
//                                             fullWidth
//                                             id="status"
//                                             label={row.status}
//                                             name="status"
//                                         />
//                                     </Grid>
//                                 </Box>
//                             ))
//                                 }
//                                 <Stack direction="column" spacing={1}>
//                                     <Button variant="contained" >
//                                         Send

//                                     </Button>
//                                     <Button variant="contained" color="error" onClick={handleClose}>
//                                         Cancel
//                                     </Button>
//                                 </Stack>


//                             </Box>
//                         </Dialog>
//                         <MenuItem width={100} onClick={handleClickOpen} setApplyloan>
//                             Send to line
//                             <SendIcon />
//                         </MenuItem>
//                         <SimpleDialog
//                             open={open}
//                             onClose={handleClose}
//                         />
//                     </Button>
//                     {/* <Button
//                     variant="contained"
//                     color="error"
//                     size="small"
//                 >
//                     <Delete />
//                 </Button> */}
//                 </Stack>
//             </Box>


//         </div >
//     );
// }


// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import Paper from '@mui/material/Paper';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import SendIcon from '@mui/icons-material/Send';




// function TablePaginationActions(props) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (event) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };
// function SimpleDialog(props) {
//   const { onClose, selectedValue, open } = props;


// }
// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,

// };

// export default function Content() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [rows, setApplyloan] = useState([]);

//   useEffect(() => {

//     fetch("http://localhost:5000/applyloan")

//       .then(res => res.json())
//       .then(
//         (result) => {
//           setApplyloan(result)
//         },

//       )
//   });

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="custom pagination table">
//         <TableRow>
//           <TableCell align="center"><b>ลำดับ</b></TableCell>
//           <TableCell align="center"><b>วันที่ / เวลา</b></TableCell>
//           <TableCell align="center"><b>ประเภทเงินกู้</b></TableCell>
//           <TableCell align="center"><b>ชื่อ - นามสกุล</b></TableCell>
//           <TableCell align="center"><b>ที่อยู่</b></TableCell>
//           <TableCell align="center"><b>เบอร์โทรศัพท์</b></TableCell>
//           <TableCell align="center"><b>รายละเอียด</b></TableCell>
//           <TableCell align="center"><b>รหัสการขาย</b></TableCell>
//           <TableCell align="center"><b>สถานะ</b></TableCell>
//           <TableCell align="center"><b>Obtion</b></TableCell>
//         </TableRow>
//         <TableBody>
//           {(rowsPerPage > 0
//             ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             : rows
//           ).map((row) => (
//             <TableRow key={row.id}>
//               <TableCell component="th" align="center" scope="row">{row.id}</TableCell>
//               <TableCell align="center">{row.date}</TableCell>
//               <TableCell align="center"> {row.loan_type}</TableCell>
//               <TableCell align="left"> {row.name}</TableCell>
//               <TableCell align="left"> {row.address}</TableCell>
//               <TableCell align="right"> {row.phone}</TableCell>
//               <TableCell align="center"> {row.detail}</TableCell>
//               <TableCell align="center"> {row.sale_id}</TableCell>
//               <TableCell align="center"> {row.status}</TableCell>
//               <TableCell align="center">
                

//               </TableCell>
//             </TableRow>
//           ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}

//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   'aria-label': 'rows per page',
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }
