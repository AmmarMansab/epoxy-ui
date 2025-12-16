'use client';

import { Box, Typography, TextField, Button, FormControlLabel, Checkbox, MenuItem, FormHelperText } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface ContactFormProps {
  translations: any; // Static translations from contact.json
  locale: string;
}

interface FormValues {
  companyName: string;
  businessType: string;
  crNumber: string;
  establishedYear: string;
  website: string;
  contactPersonName: string;
  position: string;
  email: string;
  phoneNumber: string;
  officeAddress: string;
  services: string[];
  additionalInfo: string;
}

const validationSchema = () => {
  return Yup.object({
    companyName: Yup.string().required('Required'),
    businessType: Yup.string().required('Required'),
    crNumber: Yup.string().required('Required'),
    establishedYear: Yup.string()
      .required('Required')
      .matches(/^\d{4}$/, 'Must be a valid year'),
    website: Yup.string().url('Must be a valid URL').optional(),
    contactPersonName: Yup.string().required('Required'),
    position: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
    officeAddress: Yup.string().required('Required'),
    services: Yup.array().min(1, 'Select at least one service'),
    additionalInfo: Yup.string(),
  });
};

export function ContactForm({ translations, locale }: ContactFormProps) {
  const formData = translations.form;
  const initialValues: FormValues = {
    companyName: '',
    businessType: '',
    crNumber: '',
    establishedYear: '',
    website: '',
    contactPersonName: '',
    position: '',
    email: '',
    phoneNumber: '',
    officeAddress: '',
    services: [],
    additionalInfo: '',
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
    // TODO: Implement form submission logic
  };

  // Get service options as array
  const serviceOptions = Object.entries(formData.sections.serviceDetails.services).map(([id, label]) => ({
    id,
    label: label as string,
  }));

  // Get business type options
  const businessTypeOptions = Object.entries(formData.sections.companyInfo.fields.businessType.options).map(
    ([key, value]) => ({
      key,
      value: value as string,
    })
  );

  // Get position options
  const positionOptions = Object.entries(formData.sections.contactInfo.fields.position.options).map(([key, value]) => ({
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
        data-aos="fade-up"
      >
        {formData.heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1rem',
          color: 'text.secondary',
          mb: 6,
          textAlign: 'center',
          maxWidth: 800,
          mx: 'auto',
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {formData.description}
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
              {/* Company Information Section */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3,
                }}
              >
                {formData.sections.companyInfo.heading}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mb: 4,
                }}
              >
                <Field name="companyName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.companyInfo.fields.companyName.label}
                      placeholder={formData.sections.companyInfo.fields.companyName.placeholder}
                      fullWidth
                      error={touched.companyName && !!errors.companyName}
                      helperText={touched.companyName && errors.companyName}
                    />
                  )}
                </Field>

                <Field name="businessType">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      select
                      label={formData.sections.companyInfo.fields.businessType.label}
                      placeholder={formData.sections.companyInfo.fields.businessType.placeholder}
                      fullWidth
                      error={touched.businessType && !!errors.businessType}
                      helperText={touched.businessType && errors.businessType}
                    >
                      {businessTypeOptions.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>

                <Field name="crNumber">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.companyInfo.fields.crNumber.label}
                      placeholder={formData.sections.companyInfo.fields.crNumber.placeholder}
                      fullWidth
                      error={touched.crNumber && !!errors.crNumber}
                      helperText={touched.crNumber && errors.crNumber}
                    />
                  )}
                </Field>

                <Field name="establishedYear">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.companyInfo.fields.establishedYear.label}
                      placeholder={formData.sections.companyInfo.fields.establishedYear.placeholder}
                      fullWidth
                      error={touched.establishedYear && !!errors.establishedYear}
                      helperText={touched.establishedYear && errors.establishedYear}
                    />
                  )}
                </Field>

                <Field name="website">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.companyInfo.fields.website.label}
                      placeholder={formData.sections.companyInfo.fields.website.placeholder}
                      fullWidth
                      sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}
                      error={touched.website && !!errors.website}
                      helperText={touched.website && errors.website}
                    />
                  )}
                </Field>
              </Box>

              {/* Contact Information Section */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3,
                  mt: 4,
                }}
              >
                {formData.sections.contactInfo.heading}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 3,
                  mb: 4,
                }}
              >
                <Field name="contactPersonName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.contactInfo.fields.contactPersonName.label}
                      placeholder={formData.sections.contactInfo.fields.contactPersonName.placeholder}
                      fullWidth
                      error={touched.contactPersonName && !!errors.contactPersonName}
                      helperText={touched.contactPersonName && errors.contactPersonName}
                    />
                  )}
                </Field>

                <Field name="position">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      select
                      label={formData.sections.contactInfo.fields.position.label}
                      placeholder={formData.sections.contactInfo.fields.position.placeholder}
                      fullWidth
                      error={touched.position && !!errors.position}
                      helperText={touched.position && errors.position}
                    >
                      {positionOptions.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>

                <Field name="email">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      type="email"
                      label={formData.sections.contactInfo.fields.email.label}
                      placeholder={formData.sections.contactInfo.fields.email.placeholder}
                      fullWidth
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  )}
                </Field>

                <Field name="phoneNumber">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.contactInfo.fields.phoneNumber.label}
                      placeholder={formData.sections.contactInfo.fields.phoneNumber.placeholder}
                      fullWidth
                      error={touched.phoneNumber && !!errors.phoneNumber}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                  )}
                </Field>

                <Field name="officeAddress">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      label={formData.sections.contactInfo.fields.officeAddress.label}
                      placeholder={formData.sections.contactInfo.fields.officeAddress.placeholder}
                      fullWidth
                      sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}
                      error={touched.officeAddress && !!errors.officeAddress}
                      helperText={touched.officeAddress && errors.officeAddress}
                    />
                  )}
                </Field>
              </Box>

              {/* Service Details Section */}
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  mb: 3,
                  mt: 4,
                }}
              >
                {formData.sections.serviceDetails.heading}
              </Typography>

              <Box sx={{ mb: 4 }}>
                {serviceOptions.map((service) => (
                  <FormControlLabel
                    key={service.id}
                    control={
                      <Checkbox
                        checked={values.services.includes(service.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFieldValue('services', [...values.services, service.id]);
                          } else {
                            setFieldValue(
                              'services',
                              values.services.filter((id) => id !== service.id)
                            );
                          }
                        }}
                        onBlur={handleBlur('services')}
                      />
                    }
                    label={service.label}
                    sx={{ display: 'block', mb: 1 }}
                  />
                ))}
                {touched.services && errors.services && (
                  <FormHelperText error sx={{ mt: 1 }}>
                    {errors.services}
                  </FormHelperText>
                )}
              </Box>

              <Field name="additionalInfo">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    multiline
                    rows={4}
                    label={formData.sections.serviceDetails.additionalInfo.label}
                    placeholder={formData.sections.serviceDetails.additionalInfo.placeholder}
                    fullWidth
                    sx={{ mb: 4 }}
                    error={touched.additionalInfo && !!errors.additionalInfo}
                    helperText={touched.additionalInfo && errors.additionalInfo}
                  />
                )}
              </Field>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: 'text.primary',
                    color: 'background.paper',
                    px: 6,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'text.primary',
                      opacity: 0.9,
                    },
                  }}
                >
                  {formData.sections.serviceDetails.submitButton}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
