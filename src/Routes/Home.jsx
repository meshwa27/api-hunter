import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', padding:'8px',backgroundColor:'#4E6C50'}}>
      <Link to="/login" style={{textDecoration:'none'}}>
        <h3 data-testid="login-link" style={{color:'black',fontSize:'20px', fontWeight:'700'}}>Login Page</h3>
      </Link>
      <Link to="/dashboard"  style={{textDecoration:'none'}}>
        <h3 data-testid="home-link"  style={{color:'black',fontSize:'20px', fontWeight:'700'}}>Home</h3>
      </Link>
    </div>
  );
}
export default Home;
