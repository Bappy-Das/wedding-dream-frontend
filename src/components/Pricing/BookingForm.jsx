import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const BookingForm = ({ closeModal, packageDetails }) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        axios
            .post('https://weeding-archive.onrender.com/booking', data)
            .then(() => closeModal())
            .then(() => toast.success('order successful'))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-gray-700 px-5 pt-10 pb-5">
                <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                    &#10060;
                </div>
                <div className="flex flex-wrap -mx-3 mb-3 ">
                    <input type="hidden" value={packageDetails?._id} {...register('packageId')} />
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="brideName" className="block text-gray-300">
                                Bride Name
                            </label>
                            <input
                                type="text"
                                id="brideName"
                                {...register('brideName', {
                                    required: 'Bride name is required',
                                })}
                                placeholder="Bride Name"
                                className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="groomName" className="block text-gray-300">
                                Groom Name
                            </label>
                            <input
                                type="text"
                                name="groomName"
                                id="brideName"
                                {...register('groomName', {
                                    required: 'Groom name is required',
                                })}
                                placeholder="Groom Name"
                                className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3 ">
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <label for="time" className="block text-gray-300">
                            Event Time
                        </label>
                        <input
                            type="time"
                            name="time"
                            id="time"
                            {...register('time', { required: true })}
                            className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <label for="contact" className="block text-gray-300">
                            Contact Number
                        </label>
                        <input
                            type="number"
                            name="contact"
                            id="contact"
                            {...register('contact', { required: true })}
                            placeholder="Contact"
                            className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3 ">
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="packageName" className="block text-gray-300">
                                Package Name
                            </label>
                            <input
                                type="text"
                                name="packageName"
                                id="packageName"
                                readonly
                                value={packageDetails?.name}
                                {...register('packageName', {
                                    required: 'Package name is required',
                                })}
                                placeholder="Package Name"
                                className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="packageAmount" className="block text-gray-300">
                                Package Amount
                            </label>
                            <input
                                type="number"
                                name="packageAmount"
                                id="username"
                                readonly
                                value={packageDetails?.price}
                                placeholder="Package Amount"
                                {...register('packageAmount', {
                                    required: 'Package amount is required',
                                })}
                                className="w-full px-4 py-2 text-gray-300 rounded-md border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3 ">
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="advanceAmount" className="block text-gray-300">
                                Advance Amount
                            </label>
                            <input
                                type="number"
                                name="advanceAmount"
                                id="advanceAmount"
                                {...register('advanceAmount', {
                                    required: 'Advance amount is required',
                                })}
                                placeholder="Advance Amount"
                                className="w-full px-4 py-2 text-gray-300 rounded-md border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <div className="space-y-1 text-sm">
                            <label for="accountNumber" className="block text-gray-300">
                                Event Date
                            </label>
                            <input
                                type="date"
                                name="eventDate"
                                id="eventDate"
                                {...register('eventDate', {
                                    required: 'Event Date is required',
                                })}
                                placeholder="Select Date"
                                className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-3">
                    <label for="transactionID" className="block text-gray-300">
                        Transaction ID
                    </label>
                    <input
                        type="text"
                        name="transactionID"
                        {...register('transactionID', {
                            required: 'Transaction ID is required',
                        })}
                        placeholder="Package Amount"
                        className="w-full px-4 py-2 text-gray-300 rounded-md border-white bg-gray-600 focus:border-violet-400"
                    />
                </div>
                <div className="flex flex-wrap mb-3">
                    <label for="accountNumber" className="block text-gray-300">
                        Account Number
                    </label>
                    <input
                        type="text"
                        name="accountNumber"
                        id="accountNumber"
                        {...register('accountNumber', {
                            required: 'Account number is required',
                        })}
                        placeholder="Account Number"
                        className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                    />
                </div>

                <div className="flex flex-wrap mb-3">
                    <label for="email" className="block text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        {...register('email', {
                            required: 'Email is required',
                        })}
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-md text-gray-300 border-white bg-gray-600 focus:border-violet-400"
                    />
                </div>
                <div className="flex flex-wrap mb-3">
                    <label for="venueDetails" className="block text-gray-300">
                        Venu Details
                    </label>
                    <input
                        type="text"
                        name="venueDetails"
                        id="time"
                        {...register('venueDetails', {
                            required: 'Venue details is required',
                        })}
                        placeholder="Venue Details"
                        className="w-full px-4 py-2 rounded-md border-white text-gray-300 bg-gray-600 focus:border-violet-400"
                    />
                </div>
                {/* <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full mt-2"
                >
                    {loading ? "loading..." : "Place Order"}
                </button> */}
                <div className="flex justify-center align-center">
                    <button
                        type="submit"
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {loading ? 'loading...' : 'Submit'}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
