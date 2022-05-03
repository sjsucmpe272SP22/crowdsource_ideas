import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Welcome() {
    const navigate = useNavigate();
    const handleOpen = () => {
        navigate("/signin");
    };

    return (
      <div style={{ 
        backgroundImage: 'url(https://wallpaperaccess.com/full/2811932.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh' 
      }}>
          <Button variant="contained" style={{
            position: 'absolute',
            top: '0',
            right: '0',
            margin: '50px'
          }} onClick={handleOpen}>
              GET STARTED
            </Button>
      </div>
    );
  }

  export default Welcome;