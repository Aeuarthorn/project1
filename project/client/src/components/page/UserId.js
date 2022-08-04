// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import axios from 'axios';


// export default function UserId() {
//     const [id, setID] = useState([]);

//     useEffect(() => {
//         fetchID();
//     }, []);

//     function fetchID() {
//         axios.get("http://localhost:5000/applyloan/id")
//             .then(res => {
//                 console.log(res.data)
//                 setID(res.data.apply_loan)
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     }

//     return (
//         <>
//             {id.map((row) => (
//                 <Box key={row.id}>
//                     <Grid item xs={8} >
//                         <TextField
//                             fullWidth
//                             id="id"
//                             label={row.id}
//                             name="id"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="date"
//                             label={row.date}
//                             name="date"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="loan_type"
//                             label={row.loan_type}
//                             name="loan_type"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="name"
//                             label={row.name}
//                             name="name"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="address"
//                             label={row.address}
//                             name="address"

//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="phone"
//                             label={row.phone}
//                             name="phone"

//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="detail"
//                             label={row.detail}
//                             name="detail"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="sale_id"
//                             label={row.sale_id}
//                             name="sale_id"
//                         />
//                     </Grid>
//                     <Grid item xs={8}>
//                         <TextField
//                             fullWidth
//                             id="status"
//                             label={row.status}
//                             name="status"
//                         />
//                     </Grid>
//                 </Box>

//             ))}
//         </>


//     );
// }
