import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { IProjectItemFields } from "../../../lib/interfaces/interfaces";
import { styles } from "./styles";

const ProjectCard = ({ 
   project 
}: { 
   project: IProjectItemFields 
}) => {
   const image = project.image.fields.file.url

   return (
      <Grid xs={12} sm={12} md={4} sx={styles}>
         <Box
            component='img'
            alt={project.title}
            src={image}
         ></Box>
         <Box className="content-box">
            <Typography variant="h3">{project.title}</Typography>
            <Typography>{project.description}</Typography>
         </Box>
      </Grid>
   );
}

export default ProjectCard;