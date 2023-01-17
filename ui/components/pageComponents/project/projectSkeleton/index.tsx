import { Box, Skeleton, Container } from '@mui/material'
import { styles } from './styles';

const ProjectSkeleton = () => {
   return (
      <Box sx={styles} component="main" >
         <Skeleton
            variant="rectangular"
            height={300}
            className='banner'
         />
         <Container>
            <Skeleton variant='text' width='50%' className='title' />
            {
               Array.from(new Array(3)).map((_, i) => <Skeleton key={i} variant='text' />)
            }
            <Skeleton variant='text' width='50%' />
            <Skeleton variant='text' width='50%' className='subtitle' />
            {
               Array.from(new Array(3)).map((_, i) => <Skeleton key={i} variant='text' />)
            }
            <Skeleton variant='text' width='50%' />
            {
               Array.from(new Array(3)).map((_, i) => <Skeleton key={i} variant='text' />)
            }
            <Skeleton variant='text' width='50%' />
         </Container>
      </Box>

   );
}

export default ProjectSkeleton;