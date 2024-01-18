import React, { useState } from 'react';
import Link from 'next/link';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

const IframePage = () => {
    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    return (
        <div>
            <Flex gap="small" wrap="wrap" className='w-full h-[300px] flex justify-center items-center'>
                <Link href="http://localhost:3000/send">
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>
                        Download
                    </Button>
                </Link>
            </Flex>
        </div >
    )
}

export default IframePage
