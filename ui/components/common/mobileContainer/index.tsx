import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

const MobileContainer = (props:any) => {
   const theme = useTheme()

   return (  
      <Container maxWidth='lg' disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>
         {props.children}
      </Container>
   );
}
 
export default MobileContainer;