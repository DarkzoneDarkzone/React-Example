import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Input from './input'

function Form() {
    return (
        <React.Fragment>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                        <Input details={{type: 'text', id: 'username', placeholder: 'username'}}/>
                    </div>
                    <div className="">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                        <Input details={{type: 'password', id: 'password', placeholder: 'password'}}/>
                    </div>
                </div>
                <div className="flex items-start mt-6 mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </React.Fragment>
    )
}

export default Form
