import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import background from '../images/s.jpg'

let url = 'http://deliver-project.herokuapp.com/api/register'

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)


    const onSubmit = (data) => {
        loading === false ? setLoading(true) : setLoading(false)
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
            }).catch(error => {
                console.log(error.data)
            })
    }

    return (
        <div>
            <div className="bg-cover" style={{ backgroundImage: `url(${background})`}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 h-screen">
                        <br />
                        <div className="col-span-5 border border-blue-500 mt-28 rounded h-96 text-center">
                            <br />
                            <div className="text-2xl text-white">Register</div>
                            <br />
                            <input
                                className="border rounded bg-white outline-none h-10 w-96 p-5"
                                {...register("name")}
                                placeholder="Name"
                                required
                            />
                            <input
                                className="my-5 border rounded bg-white outline-none h-10 w-96 p-5"
                                {...register("email")}
                                placeholder="Email"
                                required
                            />
                            <input
                                className="border rounded bg-white outline-none h-10 w-96 p-5"
                                {...register("password")}
                                placeholder="Password"
                                required
                            />
                            {
                                loading ? (
                                    <div
                                        class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                    >
                                        <p>Loading...</p>
                                    </div>
                                ) : (
                                    <input className="my-5 bg-blue-500 rounded text-white h-10 px-20 cursor-pointer" type="submit" />
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
