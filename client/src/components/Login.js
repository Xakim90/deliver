import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import background from '../images/d.jpg'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [result, setResult] = useState("")
    console.log(result)

    const onSubmit = (data) => {
        setResult(JSON.stringify(data))
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
                            type="text"
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
                    <div className="col-span-4"></div>
                </div>
            </form>
        </div>
    )
}

export default Login
