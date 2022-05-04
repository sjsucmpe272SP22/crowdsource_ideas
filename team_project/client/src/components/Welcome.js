import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import OutlinedCard from "./OutlinedCard";
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
          {/* < OutlinedCard style={{
            padding: '30px',
            width: '100px'
          }}/> */}
          {/* < OutlinedCard style={{
            vis
          }}
          /> */}
          <span style={{
            color: 'white',
            fontSize: 'xxx-large',
            paddingRight: '800px',
            fontFamily: 'fantasy',
            position: 'relative',
            top: '120px'
          }}> An interactive, online community </span> <br/>
          <span style={{
            color: 'white',
            fontSize: 'xxx-large',
            paddingRight: '800px',
            fontFamily: 'fantasy',
            position: 'relative',
            top: '120px'
          }}> for crowdsourcing ideas </span>
      </div>
    );
  }

  export default Welcome;