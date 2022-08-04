// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import Grid from '@mui/material/Grid';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import Stack from '@mui/material/Stack';




// function SimpleDialog(props) {
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);

//         const jsonData = {
//             date: data.get('date'),
//             loan_type: data.get('loan_type'),
//             name: data.get('name'),
//             address: data.get('address'),
//             phone: data.get('phone'),
//             detail: data.get('detail'),
//             sale_id: data.get('sale_id'),
//             status: data.get('status'),

//         }
//         fetch('http://localhost:5000/applyloan', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(jsonData),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.status === 'OK') {
//                     alert('Regiter Success')
//                     window.location = '/Login'
//                 } else {
//                     alert('Register Failed')
//                     console.log('Failed:');
//                 }

//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };

//     const { onClose, selectedValue, open } = props;
//     // const [name, setName] = React.useState('Cat in the Hat');
//     // const handleChange = (event) => {
//     //     setName(event.target.value);
//     // };
//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle><b>เพิ่มข้อมูล</b></DialogTitle>
//             <List sx={{ pt: 1 }}>

//                 <ListItem>
//                     <Box
//                         component="form"
//                         sx={{
//                             '& > :not(style)': { m: 1, width: '61.5ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id=""
//                                 label="วันที่ "
//                                 name="date"
//                                 autoComplete="date"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="loan_type"
//                                 label="ประเภทเงินกู้ "
//                                 name="loan_type"
//                                 autoComplete="loan_type"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="name"
//                                 label="ชื่อ - นามสกุล "
//                                 name="name"
//                                 autoComplete="name"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="address"
//                                 label="ที่อยู่"
//                                 name="address"
//                                 autoComplete="address"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="phone"
//                                 label="เบอร์โทร"
//                                 name="phone"
//                                 autoComplete="phone"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="detail"
//                                 label="รายละเอียด"
//                                 name="detail"
//                                 autoComplete="detail"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="sale_id"
//                                 label="รหัสการขาย"
//                                 name="sale_id"
//                                 autoComplete="sale_id"
//                             />
//                         </Grid>
//                         <Grid item xs={8}>
//                             <TextField
//                                 required
//                                 fullWidth
//                                 id="status"
//                                 label="สถานะ"
//                                 name="status"
//                                 autoComplete="status"
//                             />
//                         </Grid>
//                         <Stack direction="column" spacing={1}>
//                             <Button variant="contained" >
//                                 Add
//                             </Button>
//                             <Button variant="contained" color="error" onClick={handleClose}>
//                                 Cancel
//                             </Button>
//                         </Stack>


//                     </Box>
//                 </ListItem>
//             </List>
//         </Dialog >
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false);
//     const [selectedValue, setSelectedValue] = React.useState();

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         setSelectedValue(value);
//     };

//     return (
//         <div>
//             <MenuItem width={100} onClick={handleClickOpen}>
//                 add
//             </MenuItem>
//             <SimpleDialog
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }
