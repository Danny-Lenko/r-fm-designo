import { Typography } from "@mui/material";

const Home = () => {
   return (
      <>
         <Typography variant='h1'>Hello h1</Typography>
         <Typography variant='h2'>Hello h2</Typography>
         <Typography variant='h3' textTransform={'uppercase'}>Hello h3</Typography>
         <Typography>Hello body1</Typography>      
      </>
   );
}
 
export default Home;