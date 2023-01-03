import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import MobileContainer from '../../../components/common/mobileContainer';
import CustomButton from "../../../components/common/customButton";
import { styles } from "./styles";

const ContactHero = () => {
   const validationSchema = yup.object({
      name: yup
         .string()
         .required(`Can't be empty`)
         .min(4, '4 characters length minimum'),
      email: yup
         .string()
         .email('Enter a valid email')
         .required(`Can't be empty`),
      phone: yup
         .number()
         .typeError('Must include only numbers')
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

   return (
      <MobileContainer>
         <Box sx={styles}>
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
                     minRows={2}
                     maxRows={3}
                     id="message"
                     name="message"
                     label="Your Message"
                     value={formik.values.message}
                     onChange={formik.handleChange}
                     error={formik.touched.message && Boolean(formik.errors.message)}
                     helperText={formik.touched.message && formik.errors.message}
                  />
                  <Box sx={{ mt: { xs: 5, sm: 3 }, textAlign: { xs: 'center', sm: 'end' } }}>
                     <CustomButton light={true} title='Submit' type='submit'></CustomButton>
                  </Box>
               </form>

            </Box>
         </Box>
      </MobileContainer>
   );
}

export default ContactHero;