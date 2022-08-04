// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';



// function SimpleDialog(props) {
//     const { onClose, selectedValue, open } = props;
//     const [name, setName] = React.useState('Cat in the Hat');
//     const handleChange = (event) => {
//         setName(event.target.value);
//     };
//     const handleClose = () => {
//         onClose(selectedValue);
//     };

    

//     return (
//         <Dialog onClose={handleClose} open={open}>
//             <DialogTitle>ลบข้อมูล</DialogTitle>
//             <List sx={{ pt: 0 }}>

//                 <ListItem >
//                     <Box
//                         component="form"
//                         sx={{
//                             '& > :not(style)': { m: 1, width: '25ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >
//                         <TextField
//                             id="outlined-name"
//                             label="Name"
//                             value={name}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             id="outlined-uncontrolled"
//                             label="Uncontrolled"
//                             defaultValue="foo"
//                         />
//                         <Button variant="contained" color="error" sx={{ w: 50 }} onClick={handleClose}>
//                             Delete
//                         </Button>
//                         <Button variant="contained" color="error" sx={{ w: 50 }} onClick={handleClose}>
//                             Cancel
//                         </Button>
//                     </Box>

//                 </ListItem>
//             </List>
//         </Dialog>
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// export default function SimpleDialogDemo() {
//     const [open, setOpen] = React.useState(false);
//     //   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);
//         // setSelectedValue(value);
//     };

//     return (
//         <div>
//             <MenuItem width={100} onClick={handleClickOpen}>
//                 Delete
//             </MenuItem>
//             <SimpleDialog
//                 open={open}
//                 onClose={handleClose}
//             />
//         </div>
//     );
// }
