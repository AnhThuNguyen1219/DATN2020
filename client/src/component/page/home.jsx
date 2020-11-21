import React, {useState, useEffect}from "react";
import Banner from '../layout/banner'
import ListBooks from '../layout/list_book'
import axios from "axios";


const Home = () => {
  const [data, setData] = useState({books:[]});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        'http://localhost:9000/api/newest',
      );
 
      setData(result.data);
      setIsLoading(false);
    };
 
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      {isLoading ? (
        <div class="d-flex justify-content-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      ) : (
        
        <ListBooks header="Mới nhất" books={data}>
          
        </ListBooks>
      )}
      
    </>
  );
};
export default Home;
