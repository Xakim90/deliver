import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import background from '../images/s.jpg'

const Register = () => {

    const { register, handleSubmit } = useForm()
    const [result, setResult] = useState("")
    console.log(result)

    const onSubmit = (data) => {
        setResult(JSON.stringify(data))
    }

    return (
        <div>
            <div className="bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 h-screen">
                        <br />
                        <div className=" col-span-5 border border-blue-500 mt-28 rounded h-96 text-center">
                            <br />
                            <br />
                            <div className="text-2xl text-white">Register</div>
                            <br />
                            <input
                                className="border rounded bg-black outline-none h-10 w-96 p-5"
                                {...register("username")}
                                placeholder="UserName"
                            />
                            <input
                                className="my-5 border rounded bg-black outline-none h-10 w-96 p-5"
                                {...register("email")}
                                placeholder="Email"
                            />
                            <input
                                className=" border rounded bg-black outline-none h-10 w-96 p-5"
                                {...register("password")}
                                placeholder="Password"
                            />
                            <input className="my-5 bg-blue-500 rounded text-white h-10 px-20 cursor-pointer" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
