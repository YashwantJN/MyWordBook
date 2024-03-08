export default function validateLoginInfo(values: any): {
    email: string;
    password: string;
  } {
    const errors = { email: '', password: '' }
    console.debug('debug empty values.email validateLoginInfo', values.email)
    if (!values.email) {
      errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid'
    }
    console.debug('debug empty values.password validateLoginInfo', values.password)
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more'
    }
    return errors
  }
  