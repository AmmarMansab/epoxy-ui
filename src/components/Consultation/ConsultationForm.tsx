'use client';

import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, MenuItem, FormHelperText } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface ConsultationFormProps {
  translations: any; // Static translations from consultation.json
  locale: string;
}

interface FormValues {
  projectType: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  areaType: string;
  surfaceSize: string;
  description: string;
}

const validationSchema = () => {
  return Yup.object({
    projectType: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    contactNumber: Yup.string().required('Required'),
    areaType: Yup.string().required('Required'),
    surfaceSize: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
  });
};

export function ConsultationForm({ translations, locale }: ConsultationFormProps) {
  const formData = translations.form;
  const initialValues: FormValues = {
    projectType: 'retail',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    areaType: '',
    surfaceSize: '',
    description: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
    // TODO: Implement form submission logic
  };

  // Get project type options
  const projectTypeOptions = Object.entries(formData.projectType.options).map(([key, value]) => ({
    key,
    value: value as string,
  }));

  // Get area type options
  const areaTypeOptions = Object.entries(formData.fields.areaType.options).map(([key, value]) => ({
    key,
    value: value as string,
  }));

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 3 } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.75rem', md: '2.5rem' },
          fontWeight: 700,
          color: 'text.primary',
          mb: 2,
          textAlign: 'center',
        }}
      >
        {formData.heading}
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema()}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <Box
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: { xs: 3, md: 5 },
                mb: 6,
              }}
            >
              {/* Project Type Selection */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {formData.projectType.label}
              </Typography>

              <FormControl component="fieldset" error={touched.projectType && !!errors.projectType} sx={{ mb: 4 }}>
                <RadioGroup
                  row
                  value={values.projectType}
                  onChange={(e) => setFieldValue('projectType', e.target.value)}
                  onBlur={handleBlur('projectType')}
                >
                  {projectTypeOptions.map((option) => (
                    <FormControlLabel
                      key={option.key}
                      value={option.key}
                      control={<Radio />}
                      label={option.value}
                    />
                  ))}
                </RadioGroup>
                {touched.projectType && errors.projectType && (
                  <FormHelperText>{errors.projectType}</FormHelperText>
                )}
              </FormControl>

              {/* Form Fields */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mb: 4,
                }}
              >
                <Field name="firstName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.fields.firstName.label}
                      placeholder={formData.fields.firstName.placeholder}
                      fullWidth
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                  )}
                </Field>

                <Field name="lastName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.fields.lastName.label}
                      placeholder={formData.fields.lastName.placeholder}
                      fullWidth
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      type="email"
                      label={formData.fields.email.label}
                      placeholder={formData.fields.email.placeholder}
                      fullWidth
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  )}
                </Field>

                <Field name="contactNumber">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.fields.contactNumber.label}
                      placeholder={formData.fields.contactNumber.placeholder}
                      fullWidth
                      error={touched.contactNumber && !!errors.contactNumber}
                      helperText={touched.contactNumber && errors.contactNumber}
                    />
                  )}
                </Field>

                <Field name="areaType">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      select
                      label={formData.fields.areaType.label}
                      placeholder={formData.fields.areaType.placeholder}
                      fullWidth
                      error={touched.areaType && !!errors.areaType}
                      helperText={touched.areaType && errors.areaType}
                    >
                      {areaTypeOptions.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>

                <Field name="surfaceSize">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.fields.surfaceSize.label}
                      placeholder={formData.fields.surfaceSize.placeholder}
                      fullWidth
                      error={touched.surfaceSize && !!errors.surfaceSize}
                      helperText={touched.surfaceSize && errors.surfaceSize}
                    />
                  )}
                </Field>

                <Field name="description">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      multiline
                      rows={4}
                      label={formData.fields.description.label}
                      placeholder={formData.fields.description.placeholder}
                      fullWidth
                      sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}
                      error={touched.description && !!errors.description}
                      helperText={touched.description && errors.description}
                    />
                  )}
                </Field>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    maxWidth: 600,
                    '&:hover': {
                      bgcolor: 'text.primary',
                      opacity: 0.9,
                    },
                  }}
                >
                  {formData.submitButton}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

