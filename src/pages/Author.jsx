import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Author = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className={`flex flex-col justify-around items-center ${isPortrait ? 'w-[90vw]': 'w-[60vw]'}`}>
            <div className={`text-left ${isPortrait ? 'w-[80vw] text-[3vw]': 'w-[40vw] text-[1.4vw]'}`} style={{ paddingBottom: '10vh', paddingTop: '5vh' }}>
                <p className='pt-2'>Hi there! I'm Artur Aghajanyan, the creator of Fast Rename. This little project of mine is born out of a simple need – to make file renaming quick, easy, and hassle-free. Whether you're sorting through personal photos, managing documents, or just trying to keep your digital space tidy, Fast Rename is here to help.</p>
                <p className='pt-5'>Check out my personal website <a className={'text-blue-700 hover:underline'} href='https://aghajanyanartur.github.io' target='_blank'>here.</a></p>
                <p className='pt-5'>Check out this application on <a className={'text-blue-700 hover:underline'} href='https://github.com/aghajanyanartur/FastRename' target='_blank'>GitHub.</a></p>
                <p className='pt-5'>Thank you for using Fast Rename.</p>
            </div>
        </div>
    );
};

export default Author;
