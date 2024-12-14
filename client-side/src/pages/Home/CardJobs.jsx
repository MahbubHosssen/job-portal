import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardJobs = () => {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, [])

    return (
        <div>
            <div></div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    cardData.map(card => <div key={card._id} className='border p-6 rounded-lg hover:border-blue-300 space-y-6 hover:mt-[-6px] transition-all'>
                        <div className='flex gap-4 items-center '>
                            <img src={card.company_logo} className='w-12' alt="" />
                            <div>
                                <h4 className='text-xl font-medium text-left'>{card.category}</h4>
                                <p className='flex items-center text-left'><CiLocationOn /> {card.location}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-left text-xl font-medium'>{card.title}</h3>
                            <div className='flex gap-8 items-center'>
                                <p>{card.jobType}</p>
                                <p>{card.applicationDeadline}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-left'>{card.description}</p>
                        </div>
                        <div className='text-left'>
                            {
                                card.requirements.map((requirement, idx) => <div key={idx} className="badge badge-ghost">{requirement}</div>)
                            }

                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-left'>Salary:</p>
                                <p>${card.salaryRange.min} - ${card.salaryRange.max}</p>
                            </div>
                            <div>
                                <Link to={`/job/${card._id}`}>
                                    <button className="btn bg-blue-300 hover:bg-blue-600 rounded-md text-blue-800 hover:text-white">Apply Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CardJobs;