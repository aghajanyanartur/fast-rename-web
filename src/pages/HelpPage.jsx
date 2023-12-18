import React from 'react';
import { useMediaQuery } from 'react-responsive';

const HelpPage = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className='flex flex-col justify-around items-center w-[80vw] font-bold'>
            <div style={{ paddingBottom: '10vh', paddingTop: `${isPortrait ? '' : '5vh'}` }}>
                <h1 className={`${isPortrait ? 'text-[5vw]' : 'text-[3vw]'} text-blue-950`}>How to Use Fast Rename</h1>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-2 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Choose the folder</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Copy and paste the folder path, or just browse and open it.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Filter and sort</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Filter by extension:</i> You can filter the files by extension if needed. Extension should be specified without a dot. For example, if you want to rename all the files with the extension '.txt', you should type 'txt' in the filter field<br /><br />
                    <i>Sort alphabetically:</i> If you choose this option, the files will be sorted alphabetically <i>before</i> renaming.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Use current name</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Cases:</i> You can keep the cases in the names of the files as they are. otherwise, you can make the names of the files uppercase or lowercase. This applies only to the <i>current names</i> of the files.<br /><br />
                    <i>Replace:</i> Find and replace a specific text in the current names of the files. For example, if you want to replace all the occurrences of the word 'file' with 'document', you should type 'file' in the 'Find' field and 'document' in the 'Replace' field.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Define counter</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Starting number:</i> The number from which the counter starts. For example, if you set the start number to 10, the first file will be named 10, the second 11, and so on.<br /><br />
                    <i>Number of digits:</i> The number of digits in the counter. For example, if you set the number of digits to 3, the first file will be named 001, the second 002, and so on.<br /><br />
                    <i>Step size:</i> The step size of the counter. For example, if you set the step size to 2, the first file will be named 10, the second 12, the third 14, and so on.<br /><br />
                    <i>Decrement:</i> Selecting this checkbox reverses the increment behavior. Instead of numbers increasing, they will decrease by the specified step size. For example, if your starting number is 10 and the increment is set to 2, enabling 'Decrement' will change the sequence to decrease, resulting in 10, 8, 6, etc.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Add date</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Select the date:</i> Choose whether to append a date or not. If yes, you can choose from the current date, the date the item was last modified, or the date it was created.<br/><br/>
                    <i>Format of date:</i> Choose the format of the date from the list. You can choose the sequence of day, month, and year, and the separators between them. For example, you could format the date as "yyyy-mm-dd" (e.g., 2023-12-15) or "dd.mm.yyyy" (e.g., 15.12.2023).
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Create name pattern</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Add any text:</i> You can add any text to the name pattern. Just write document in the pattern line.<br/><br/>
                    <i>Add components:</i> Use button to add current name, counter and/or date. All modifications you made in the previous steps are already applied to the components. You can add more than one from each component and in any order. Consider using counter, to avoid name conflicts.<br/><br/>
                    <i>Examlpe:</i> Given the pattern "document_{'{date}'}-No.{'{counter}'}", (assuming you have chosen the current date in "mm-dd-yyyy" format and a counter starting from 1, with a step size of 1, and number of digits - 3), the file names will go "document_12-15-2023_No.001", "document_12-15-2023_No.002", "document_12-15-2023_No.003", and so on
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Change extension</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    You have an option to change the extension of the files. All renamed files will have newly specified extension. Be cautious, as this may cause some files to become unusable. Extension should be specified without a dot.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>Save configurations</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Save your settings to a file. Use 'Save configuration file' option in 'File' menu. Saving the configuration file may be useful, if you will need to rename files later with the same setting.
                </p>
            </div>
        </div>
    );
};

export default HelpPage;