import { useContext, useEffect, useState } from 'react';
import ProductsTable from '../Components/ProductsTable';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Components/Loader';
import '../styles/dashboard.css'

function Dashboard() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const {isAuth,logoutUser} = useContext(AuthContext)
  console.log(isAuth)

  useEffect(() => {
    fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      .then(res => res.json())
      .then(data => {
        setProduct(data.data);  
        setLoading(false); 
      })
      .catch(err => {
        console.error(err);
        setLoading(false); 
      });
  }, []);

 

  return loading ? <Loader /> : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token:{isAuth.token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProductsTable data={product} />
      </div>
    </div>
  );
}

export default Dashboard;
