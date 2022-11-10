import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

const WebDesignProject = ({ project }: { project: Record<string, string> }) => {

   const projectStyles = {
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row', md: 'column' },
      mb: {xs: 1, sm: 0},
      '& img': {
         width: { xs: '100%', sm: '50%', md: '100%' },
         borderTopLeftRadius: '15px',
         borderTopRightRadius: { xs:'15px', sm: 0, md: '15px' },
         borderBottomLeftRadius: { sm: '15px', md: 0 }
      },
      '& .content-box': {
         p: 4,
         textAlign: 'center',
         backgroundColor: 'greyCustom.light',
         borderBottomLeftRadius: { xs:'15px', sm: 0, md: '15px' },
         borderBottomRightRadius: '15px',
         borderTopRightRadius: { sm: '15px', md: 0 },
         flexGrow: 1,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: { sm: 'center', md: 'unset' },
         '& .MuiTypography-h3': {
            mb:2,
            textTransform: 'uppercase',
            color: 'peachCustom.main'
         }
      }
   }

   return (
      <Grid xs={12} sm={12} md={4} sx={projectStyles}>
         <Box
            component='img'
            alt={project.title}
            src={project.img}
         ></Box>
         <Box className="content-box">
            <Typography variant="h3">{project.title}</Typography>
            <Typography>{project.desc}</Typography>
         </Box>
      </Grid>
   );
}

export default WebDesignProject;