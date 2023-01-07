export const styles = (location:any) => ({
   pt: {
      xs: location.pathname === '/contact' ? 88 / 8 : 253 / 8,
      sm: 166 / 8,
      md: 144 / 8
   },
   pb: 72 / 8,
   zIndex: -100,
   backgroundColor: 'common.black',
   mt: location.pathname === '/contact' ? 163 / 8 : { xs: (64 - 253) / 8, sm: -9 },
})
