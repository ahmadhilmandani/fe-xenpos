import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [loginFormData, setLoginFormData] = useState({
    // name: '',
    // phone: '',
    email: '',
    password: ''
  })
  function handleLogin() {
    setIsLoading(true)
    axios.post(' http://xente.my.id:8100/api/v1/owner/signin', {
      email: loginFormData.email,
      password: loginFormData.password,
      expired: true
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false)
      console.log(isLoading)
    })
  }
  return (
    <>
      <div className="max-w-[560px] w-full">
        <header className="bg-cust-black-darker py-6">
          <h1 className="text-cust-yellow mx-auto text-center mb-2">
            Xenpos
          </h1>
          <p className="text-cust-gray mb-3 mx-auto w-fit font-light">
            <strong className="text-cust-gray font-extrabold">Login</strong> to see your business!
          </p>
        </header>
        <main className="bg-cust-gray/50 p-6">
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm">Email</label>
            <div className="mt-2">
              <input onChange={(e) => { setLoginFormData({ ...loginFormData, email: e.target.value }) }} type="email" name="email" id="email" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Johndoe@email.dev" />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm">Password</label>
            <div className="mt-2">
              <input onChange={(e) => { setLoginFormData({ ...loginFormData, password: e.target.value }) }} type="password" name="password" id="password" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Admin123#" />
            </div>
          </div>
          <div className="w-full mx-auto mb-6">
            <Button clickAction={handleLogin}>
              Login
            </Button>
          </div>
          <small className="flex gap-1 items-center w-fit mx-auto text-xs">
            Dont have account yet? <NavLink to="/auth/register" className="text-cust-blue text-xs hover:font-bold transition-all">Register here!</NavLink>
          </small>
        </main>
      </div>
    </>
  )

}