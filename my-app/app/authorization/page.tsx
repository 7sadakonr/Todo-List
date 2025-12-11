'use client'

import axios from 'axios'
import { Config } from '../backoffice/signup/config'

export default function Authorization() {
  const sendToken = async () => {
    const token = 'abcd'
    const headers = {
      'Authorization': 'Bearer ' + token
    }

    const payload = {
      id: 100,
      name: 'java',
      price: 900
    }

    const url = `${Config.apiUrl}/api/product/create`
    const response = await axios.post(url, payload, { headers })

    console.log(response)
  }

  return (
    <div>
      <button className="button cursor-pointer" onClick={sendToken}>
        Send Token
      </button>
    </div>
  )
}