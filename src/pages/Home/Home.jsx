import React from 'react';
import Banner from './Banner';
import Category from './Category';
import CardJobs from './CardJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <CardJobs></CardJobs>
        </div>
    );
};

export default Home;