import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import background from '../images/NewYork.jpg'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [result, setResult] = useState("")
    console.log(result)

    const onSubmit = (data) => {
        setResult(JSON.stringify(data))
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 h-screen">
                    <div className="col-span-4"></div>
                    <div className="border mt-28 rounded shadow-2xl w-96 h-96 text-center">
                        <br />
                        <br />
                        <div className="text-2xl">Login Page</div>
                        <br />
                        <br />
                        <input
                            className="border rounded border-red-300 outline-none h-10 px-7"
                            {...register("email")}
                            placeholder="Email"
                        />
                        <input
                            className="my-5 border rounded border-red-300 outline-none h-10 px-7"
                            {...register("password")}
                            placeholder="Password"
                        />
                        <input className="bg-red-500 rounded text-white h-10 px-20 cursor-pointer" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
