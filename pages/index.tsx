import React, { useState, useRef, useEffect } from 'react';
import { Button, Modal } from 'antd';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('message', (event: any) => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(event.data, '*');
        console.log('message', event.data)
        if (event.data.status) {
          handleOk()
          router.push(event.data.redirect);
        }
      }
    })
  })

  return (
    <div className='w-screen h-screen'>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <iframe src="http://localhost:3000/iframe/" frameBorder="0" className='w-full h-[300px]' ref={iframeRef} />
      </Modal>
    </div>
  )
}


