import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { styles } from "./styles";

const DesignSkeleton = () => {
   return (
      <Box sx={styles} component="main" >
         <Container>
            <Skeleton variant="rounded" width="100%" >
               <div className="rectangle"></div>
            </Skeleton>
            <Grid container spacing={4} >
               {
                  Array.from(new Array(3)).map((_, i) =>
                     <Grid xs={12} sm={12} md={4}
                        key={i}
                        item
                        className="project-card"
                     >
                        <Skeleton variant="rounded" className="project-thumbnail" />
                        <Box className="project-content">
                           <Skeleton variant="text" className="project-heading" />
                           <Skeleton variant="text" />
                           <Skeleton variant="text" />
                        </Box>
                     </Grid>)
               }
            </Grid>
            <Grid container spacing={4} mt={5}>
               {
                  Array.from(new Array(2)).map((_, i) =>
                     <Grid xs={12} sm={12} md={6}
                        key={i}
                        item
                     >
                        <Skeleton variant="rounded" height={200} />
                     </Grid>)
               }
            </Grid>
         </Container>
      </Box>
   );
}

export default DesignSkeleton;