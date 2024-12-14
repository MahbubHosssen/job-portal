import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { _id, title, jobType, category, company_logo, location, applicationDeadline, description, requirements, salaryRange } = useLoaderData()
    // console.log(job)

    return (
        <div className='border p-6'>
            <div className='flex justify-between'>
                <div className=''>
                    <h3 className='text-2xl font-medium'>{title}</h3>
                    <div className='flex gap-8 items-center'>
                        <p>{jobType}</p>
                        <p>{applicationDeadline}</p>
                    </div>
                </div>

                <div>
                    <button className='btn bg-blue-600 text-white'>Apply now</button>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <img src={company_logo} className='mx-auto' alt="" />
            </div>
            <div>
                <h2 className='text-xl font-medium text-left'>Overview</h2>
                <div className="divider"></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <p className='text-left my-6'>{description}</p>
            </div>
            <div className="divider"></div>
            <div className='flex justify-between'>
                <div>
                    <button className="btn bg-blue-600 text-white">Apply now</button>
                    <button className="btn bg-transparent border-blue-300 ml-2">Save Job</button>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='font-medium'>share this</p>
                    <FaFacebook className='text-2xl'></FaFacebook>
                    <FaTwitter className='text-2xl'></FaTwitter>
                    <FaLinkedin className='text-2xl'></FaLinkedin>
                    <FaGithub className='text-2xl'></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;