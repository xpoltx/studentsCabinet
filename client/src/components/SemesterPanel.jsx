import React from 'react';

const SemesterPanel = () => {
    const semesters = Array.from({ length: 8 }, (_, index) => `${index + 1}`);

    return (
        <div
            className="w-2/3 gap-1 flex p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md justify-center items-center mx-auto mt-10"
        >
            {semesters.map((semester, index) => (
                <button
                    key={index}
                    className="flex-grow basis-0 flex-shrink px-2 py-2 w-auto border-2 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    {semester}
                </button>
            ))}
        </div>
    );
};

export default SemesterPanel;