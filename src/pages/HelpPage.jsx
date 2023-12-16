import React from 'react';
import { useMediaQuery } from 'react-responsive';

const HelpPage = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div className='flex flex-col justify-around items-center w-[80vw] font-bold'>
            <div style={{ paddingBottom: '10vh', paddingTop: `${isPortrait ? '' : '5vh'}` }}>
                <h1 className={`${isPortrait ? 'text-[5vw]' : 'text-[3vw]'} text-blue-950`}>How to Use Fast Rename</h1>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-2 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>1. Copy and paste the folder path</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Enter the path of the folder you want to access or use. This involves copying the exact location of the folder from your computer's file system and pasting it into the designated field. For example, on a Windows system, it might look like "C:\Users\YourName\Documents\MyFolder". This address tells the program where to find or store files within the specific folder you've identified.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>2. Select the starting number</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Choose a specific number to begin the sequence. For instance, if you select '1', the sequence will start from 1 and continue as 1, 2, 3, and so on. This initial number sets the base for the subsequent numbers in the series.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>3. Decide the number of digits to fill</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Specify the total length for a number by setting a digit count. If the original number has fewer digits than this count, it will be padded with leading zeros until it reaches the set length. For example, if you choose '4' as the number of digits to fill and your number is '5', it will be formatted as '0005'. This setting is often used to standardize the format of numerical data, especially in cases where uniform digit counts are required.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>4. Choose incrementation step</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Choose the value by which the sequence of numbers will increase. For example, if you select '2', each number in the sequence will be 2 greater than the previous one (e.g., 1, 3, 5, 7). This setting determines the step size between consecutive numbers in your sequence, allowing for regular or custom intervals.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>5. Add a name pattern</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    Specify (additionally) the format or structure for naming items, such as files or records. This pattern can include a combination of fixed text, numbers, and special characters. For instance, if you set a name pattern as "Document_#", each item will be named starting with "Document_" followed by a unique number or identifier (e.g., Document_1, Document_2). This feature is useful for organizing and identifying items systematically within a database, a file system, or any collection requiring consistent naming conventions.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>6. Add Date If Needed</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    This feature allows you to append a date to your naming pattern, with options to choose the type of date and its format. You can select from the current date, the date the item was last modified, or the date it was created. Additionally, you have the flexibility to customize the date format, including the sequence of day, month, and year, and the separators between them. For example, you could format the date as "YYYY-MM-DD" (e.g., 2023-12-15) or "DD/MM/YYYY" (e.g., 15/12/2023), depending on your preference. This functionality is useful for organizing items chronologically and maintaining a clear record of timelines.
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>7. Choose additional options</p>
                <p className={`${isPortrait ? 'text-[2vw] w-[80vw] p-3 rounded-2xl' : 'text-[1vw] w-[60vw] p-5 rounded-3xl'} text-left  bg-gray-300`}>
                    <i>Decrement:</i> This checkbox reverses the increment behavior. Instead of numbers increasing, they will decrease by the specified step size. For example, if your starting number is 10 and the increment is set to 2, enabling 'Decrement' will change the sequence to decrease, resulting in 10, 8, 6, etc. This is useful when you need a descending order in your numbering.<br /><br />
                    <i>Name Pattern Trailing:</i> When this option is selected, the specified name pattern will be placed after the numbers or dates in the naming convention. For example, if your number sequence is "1, 2, 3" and your name pattern is "_Document", with this option enabled, the resulting names would be "1_Document", "2_Document", "3_Document", etc. This feature essentially reverses the usual order, putting the descriptive part of the name (like 'Document') after the dynamic numerical or date component, which can be useful for certain organizational or sorting purposes.<br /><br />
                    <i>Sort Alphabetically Before Renaming:</i> This option sorts the items alphabetically based on their current names before applying the new naming convention. It's particularly useful when you want to maintain an alphabetical order in the new names. For example, if you are renaming a list of files, they will first be sorted by their original names and then renamed according to your specified pattern and sequence. This helps in keeping files organized and easily searchable.<br /><br />
                </p>

                <p className={`${isPortrait ? 'text-[3vw] w-[80vw] pt-4 pb-1' : 'text-[1.5vw] w-[60vw] pt-8 pb-2'}  text-left`}>8. Click the 'Rename' button.</p>
            </div>
        </div>
    );
};

export default HelpPage;