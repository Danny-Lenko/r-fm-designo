export const styles = {
   mb: 160 / 8,
   minHeight: { xs: 525, sm: 424, md: 308 },
   display: 'grid',
   gridTemplateColumns: { xs: '1f', md: '1fr 1fr' },
   gridTemplateRows: { xs: '1fr 1fr', md: '1fr' },
   gridTemplateAreas: {
      xs: `
         "app"
         "graphic"
      `,
      md: `
         "app graphic"
      `
   },
   gap: '25px'
}