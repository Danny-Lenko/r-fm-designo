export const styles = (image: string) => ({
   position: 'relative',

   '& .parallax': {
      backgroundImage: `url(${image})`,
      minHeight: '350px',
      backgroundAttachment: 'fixed',
      backgroundPosition: '50% 0',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
   }
})