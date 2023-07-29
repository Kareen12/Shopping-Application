import {useState, useEffect} from 'react'
import Product from "../components/Product";
import { Spinner } from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);
    }
    catch(error){
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  }, [])

  return (<div className="flex flex-col items-center justify-center my-8 mt-20 mb-10">
    {
      loading ? (<Spinner/>) : (posts.length > 0 ? 
      (<div className="grid xl:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3
       max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
        {posts.map( (post) => (<Product key={post.id} post={post} />)
      )}
      </div>) : 
      (<div className="flex justify-center items-center h-screen">
        <p>No data found</p>
      </div>) )
    }
  </div>)
};

export default Home;
