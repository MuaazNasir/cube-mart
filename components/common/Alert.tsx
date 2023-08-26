"use client";

import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

type Props = {
    message: string;
    duration: number;
    showAlert: boolean;
    setShowAlert: any;
}

const Alert = ({ message, duration, showAlert, setShowAlert }: Props) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (showAlert && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            setShowAlert(false);
        }
    }, [showAlert, timeLeft, setShowAlert]);

    const handleClose: any = () => {
        setShowAlert(false);
    };

    return (
        showAlert && (
            <>
                <div className="fixed w-[30rem] items-end justify-start !overflow-hidden left-5 bottom-5 m-0 p-0 z-50 flex">
                    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-md w-full bg-opacity-80 backdrop-blur-md hidden sm:block">
                        <div className="mb-2 capitalize text-center font-sans text-lg font-semibold">{message}</div>
                        <div className="flex flex-row items-center justify-between">

                            <div className="relative w-[80%] overflow-hidden h-2 bg-gray-300 rounded-md">
                                <div
                                    className="absolute h-2 bg-blue-500 transition-all duration-1000"
                                    style={{
                                        width: `${(timeLeft / duration) * 100}%`,
                                    }}
                                />
                            </div>
                            <button
                                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded max-w-min"
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="bg-green-500 p-3 rounded-full">
                        <DoneIcon className=" rounded-full sm:hidden text-white text-4xl m-auto font-extrabold" />
                    </div>
                </div>
            </>
        )
    );
};

export default Alert;
