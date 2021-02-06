import { useFormik } from 'formik';
import style from './style.module.css'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const validationShema = Yup.object({
	firstName: Yup.string().required('Required').max(20, 'Max 20 characters'),
	lastName: Yup.string().required('Required').max(20, 'Max 20 characters')
})

const FeedbackForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
		},
		validationSchema: validationShema,
		onSubmit(values) {
			alert(JSON.stringify(values))
		}
	})

	return <form className={style.formWrapper} onSubmit={formik.handleSubmit}>
		<TextField
			fullWidth
			id="firstName"
			name="firstName"
			label="firstName"
			value={formik.values.firstName}
			onChange={formik.handleChange}
			error={formik.touched.firstName && formik.errors.firstName}
			helperText={formik.touched.firstName && formik.errors.firstName}
		/>
		<TextField
			fullWidth
			id="lastName"
			name="lastName"
			label="lastName"
			type="lastName"
			value={formik.values.lastName}
			onChange={formik.handleChange}
			error={formik.touched.lastName && Boolean(formik.errors.lastName)}
			helperText={formik.touched.lastName && formik.errors.lastName}
		/>
		<Button color="primary" variant="contained" fullWidth type="submit">
			Submit
        </Button>
	</form>
}


export { FeedbackForm };