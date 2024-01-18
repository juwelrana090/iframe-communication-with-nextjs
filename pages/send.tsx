import React, { useEffect } from 'react'

const SendPage = () => {

    const data = {
        status: true,
        redirect: "http://localhost:3000/api/hello"
    };

    useEffect(() => {
        window.parent.postMessage(data);
    })
}

export default SendPage