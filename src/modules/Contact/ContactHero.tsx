import MobileContainer from "../../library/common/components/MobileContainer/MobileContainer";
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import { SECTIONMARGINBOTTOM } from "../../library/common/constants/constants";

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const ContactHero = () => {

   const validationSchema = yup.object({
      name: yup
         .string()
         .required('Name is required')
         .min(4, '4 characters length minimum'),
      email: yup
         .string()
         .email('Enter a valid email')
         .required('Email is required'),
      phone: yup
         .number()
         .typeError('Must include only number')
         .min(9, '9 characters length minimum')
         .optional(),
      message: yup
         .string()
         .optional()
   });

   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         phone: '',
         message: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });


   const componentStyles = {
      display: 'flex',
      backgroundColor: 'peachCustom.main',
      borderRadius: '15px',
      py: { xs: 72 / 8, md: 55 / 8 },
      px: { xs: 3, sm: 58 / 8, md: 96 / 8 },
      color: 'common.white',
      mb: SECTIONMARGINBOTTOM / 8,
      gap: 3,

      '& .text-box': {
         width: { xs: '100%', md: '50%' },
         textAlign: { xs: 'center', sm: 'start' },
         '& .MuiTypography-h1': {
            mb: 3
         }
      },
      // the form styles
      '& .form-box': {
         width: { xs: '100', md: '50%' },
         '& .MuiTextField-root': {
            mt: 2,
            '& .MuiInputLabel-root': {
               color: 'common.white',
               opacity: 0.7,
               ml: 2
            },
            '& .MuiInput-root': {
               color: 'common.white',
               pl: 2,
               pb: 1,
               '&:before': {
                  borderColor: 'common.white',
                  opacity: 0.5
               }
            }
         },
         '& .MuiInput-underline:after': {
            borderBottomColor: 'common.white'
         },
         // prevents chrome autofill styling
         '& input:-webkit-autofill': {
            transition: 'background-color 600000s 0s, color 600000s 0s'
         },
         '& input:-webkit-autofill:focus': {
            transition: 'background-color 600000s 0s, color 600000s 0s'
         },
      }
   }

   return (
      <MobileContainer>
         <Box sx={componentStyles}>
            <Box className="text-box">
               <Typography variant="h1">Contact Us</Typography>
               <Typography>
                  Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
               </Typography>
            </Box>

            <Box className="form-box">
               <form onSubmit={formik.handleSubmit} >
                  <TextField
                     variant="standard"
                     fullWidth
                     id="name"
                     name="name"
                     label="Name *"
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     error={formik.touched.name && Boolean(formik.errors.name)}
                     helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                     variant="standard"
                     fullWidth
                     id="email"
                     name="email"
                     label="Email Address *"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     error={formik.touched.email && Boolean(formik.errors.email)}
                     helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                     variant="standard"
                     fullWidth
                     id="phone"
                     name="phone"
                     label="Phone"
                     value={formik.values.phone}
                     onChange={formik.handleChange}
                     error={formik.touched.phone && Boolean(formik.errors.phone)}
                     helperText={formik.touched.phone && formik.errors.phone}
                  />
                  <TextField
                     variant="standard"
                     fullWidth
                     multiline
                     minRows={3}
                     maxRows={5}
                     id="message"
                     name="message"
                     label="Your Message"
                     value={formik.values.message}
                     onChange={formik.handleChange}
                     error={formik.touched.message && Boolean(formik.errors.message)}
                     helperText={formik.touched.message && formik.errors.message}
                  />
                  <Button color="primary" variant="contained" fullWidth type="submit">
                     Submit
                  </Button>
               </form>

            </Box>
         </Box>
      </MobileContainer>
   );
}

export default ContactHero;