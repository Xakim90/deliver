// // import React, { useEffect } from 'react'
// // import axios from 'axios';

// // let url = 'https://deliver-project.herokuapp.com/api/product';

// // const Test = () => {

// //     useEffect(() => {
// //         axios.get(url)
// //             .then(res => {
// //                 console.log(res.data)
// //             }).catch(err => {
// //                 console.log(err)
// //             })
// //     }, [])
// //     return (
// //         <div>

// //         </div>
// //     )
// // }

// // export default Test
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// // import { API } from '../../config';
// let url = 'https://deliver-project.herokuapp.com/api/product';

// const Test = () => {
//     const [values, setValues] = useState({
//         username: 'silvio1',
//         name: 'Silvioo',
//         email: 'berlusconi@gmail.com',
//         password: '123ooo007',
//     });

//     const [loading, setLoading] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const { username, name, email, password } = values;
//         const user = { username, name, email, password };

//         await axios.post('${API)/signup', user);
//     };

//     const handleChange = name => e => {
//         setValues({ ...values, [name]: e.target.value });
//     };

//     // const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <input
//                     value={values.username}
//                     onChange={handleChange('username')}
//                     type="text"
//                     className="form-control"
//                     placeholder="Type your username"
//                 />
//             </div>
//         </form>
//     )
// }
// export default Test