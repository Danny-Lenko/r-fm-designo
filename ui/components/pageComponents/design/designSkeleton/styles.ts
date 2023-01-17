export const styles = {
   minHeight: '100vh',
   mb: '10rem',

   '& .MuiSkeleton-root': {
      borderRadius: '8px'
   },

   '& .rectangle': {
      height: 250,
      marginBottom: '5rem'
   },

   '& .project-card': {
      display: 'flex',
      columnGap: 10,
      flexDirection: { xs: 'column', sm: 'row', md: 'column' },

      '& .project-thumbnail': {
         height: 200,
         width: '100%'
      },

      '& .project-content': {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center'
      },
   
      '& .project-heading': {
         fontSize: '2.5rem'
      },
   },



}