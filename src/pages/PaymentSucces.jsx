import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSucces = () => {
    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference");
  return (
    <div>
        <div className='h-100vh flex justify-center'>
            <h1 className=' uppercase text-3xl'>Order successfull</h1>
            <p>
                Reference No.{referenceNum}
        </p>
        </div>
    </div>
  )
}

export default PaymentSucces