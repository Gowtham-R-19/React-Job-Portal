import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs';
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <HomeCards/>
            <JobListings isHome={true}/>
            <ViewAllJobs/>
        </div>
    )
}

export default HomePage