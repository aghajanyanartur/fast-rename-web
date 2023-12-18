import { Button } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className='flex flex-col justify-around items-center w-[80vw] font-bold'>
            <div style={{ paddingBottom: '10vh', paddingTop: '5vh' }}>
                <h1 className={`${isPortrait ? 'text-[5vw]' : 'text-[3vw]'} text-blue-950 pb-5`}>Fast Rename</h1>
                <p className={`${isPortrait ? 'text-[3vw] w-[80vw]' : 'text-[1.5vw] w-[60vw]'} text-left`}>FastRename is a powerful and user-friendly application designed to streamline the process of renaming files in bulk. With its intuitive interface and flexible renaming rules, FastRename makes organizing your digital files easier and faster.</p>
            </div>
            <Button style={{
                fontSize: `${isPortrait ? '3vw' : '2vw'}`, width: `${isPortrait ? '50vw' : '35vw'}`, height: `${isPortrait ? '5vh' : '10vh'}`,
                textTransform: 'none', backgroundColor: '#172554', fontWeight: 'bold', marginTop: `${isPortrait ? '' : '3vh'}`
            }}
                onMouseEnter={(e) => {
                    e.target.style.variant = '#outlined'; e.target.style.backgroundColor = '#fff'
                    e.target.style.color = '#172554'; e.target.style.border = '2px solid #172554'
                }}
                onMouseLeave={(e) => {
                    e.target.style.variant = 'contained'
                    e.target.style.backgroundColor = '#172554'; e.target.style.color = '#fff'
                    e.target.style.border = 'none'
                }}
                variant="contained" target="_blank"
                href="https://drive.google.com/uc?export=download&id=1ucvI_z83S0voRO84PJl5izLFvpj5lY-k">
                Download Fast Rename
            </Button>
        </div>
    );
};

export default HomePage;
