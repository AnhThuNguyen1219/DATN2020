import React from 'react';
import Banner from '../layout/banner';
import Footer from '../layout/footer';
import Header from '../layout/header';
import ListBooks from '../layout/list_book';

const Home = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <ListBooks/>
            <Footer/>
        </>
          
    );
}
export default Home;