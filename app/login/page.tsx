import React from 'react'
import { Login } from '../action/login'

const LogginPage = () => {
  return (
    <div>
        <form action={Login}>
            <select name="role" className='border border-amber-500'>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
               
            </select>
             <button className='bg-blue-600 ml-4 p-1'>Login</button>
        </form>
    </div>
  )
}

export default LogginPage