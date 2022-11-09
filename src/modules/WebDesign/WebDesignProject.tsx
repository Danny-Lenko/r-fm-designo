import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';

const WebDesignProject = ({ project }: { project: Record<string, string> }) => {



   // const projectStyles = {

   // }

   return (
      <Grid xs={12} sm={12} md={4}>
         <Box
            component='img'
            alt={project.title}
            src={project.img}
         ></Box>
      </Grid>
   );
}

export default WebDesignProject;