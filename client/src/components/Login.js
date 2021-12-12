import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import background from '../images/d.jpg'

let url = 'http://deliver-project.herokuapp.com/api/login';

const Login = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 h-screen">
                    <div className="col-span-4"></div>
                    <div className="border mt-28 rounded shadow-2xl w-96 h-72 text-center">
                        <br />
                        <div className="text-2xl">Login Page</div>
                        <br />
                        <input
                            className="rounded border border-red-300 outline-none h-10 w-72 px-4"
                            {...register("email")}
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="my-5 border rounded border-red-300 outline-none h-10 w-72 px-4"
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                        />
                        <input
                            className="bg-black rounded text-white h-10 px-20 cursor-pointer"
                            type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
