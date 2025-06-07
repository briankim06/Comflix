import React from 'react';

function Loader() {
    return (
            <div className="flex justify-center items-center h-full">
                <div className="w-fit px-2 py-0.5 text-[10px] font-medium text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                    loading...
                </div>
            </div>
    );

}

export default Loader;