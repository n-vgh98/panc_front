import Limit from '@/sections/limit';
import Head from 'next/head';
import React from 'react';

const limit = () => {
    return (
        <>
            <Head>
                <title>Limit Orders | PancakeSwap</title>
            </Head>

            <Limit />
        </>
    );
};

export default limit;