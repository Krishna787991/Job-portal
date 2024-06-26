import React from 'react'
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiCalendar, FiDollarSign } from 'react-icons/fi';
function Card({ data,getDataForJobDetails }) {
    const { _id,companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType,
        postingDate, description } = data;
    
    const handleDataforJobDetails=()=>{
        console.log("hello")
        getDataForJobDetails(data)
    }
    
    return (
        <section className='card'>
            <Link to={`/job-details/${_id}`} onClick={handleDataforJobDetails} className='flex gap-4 flex-col sm:flex-row items-start'>
                <div>
                    <img src={companyLogo} className="w-100 h-20 " alt="" />
                    <div>
                        <h4 className='text-primary mb-1'>{companyName}</h4>
                        <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                        <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                            <span className='flex items-center gap-2'><FiMapPin /> {jobLocation}</span>
                            <span className='flex items-center gap-2'><FiClock /> {employmentType}</span>
                            <span className='flex items-center gap-2'><FiDollarSign /> {minPrice}-{maxPrice}k</span>
                            <span className='flex items-center gap-2'><FiCalendar /> {postingDate}</span>
                        </div>
                        <p className='text-base text-primary/70'>{description}</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default Card