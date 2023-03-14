import { Checkbox, FormControlLabel } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { COLORS, SIZES } from '../../assets/theme/theme';
import AuthLayout from '../../components/shared/AuthLayout';
import {
  PasswordField,
  TextField,
} from '../../components/shared/FormComponent';
import { AppButton } from '../../components/shared/Widget';

const Login = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <AuthLayout
        title="Login to your account"
        discription="Welcome back! Please enter your details"
        bannerTitle={() => <h3 className="text-kblack"></h3>}
      >
        <div className="form_container" style={{ flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email Address"
              // name="email"
              type="email"
              placeholder="Enter email address"
              required={true}
              {...register('email', { required: true })}
            />
            <PasswordField
              label="Password"
              // {...name}
              required={true}
              placeholder="Enter password"
              {...register('password', { required: true })}
            />

            <div className="flex justify-between items-center">
              {/* <Checkbox label = ""  /> */}
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                style={{
                  color: COLORS.kblack2,
                  fontSize: SIZES.body4,
                  display: 'flex',
                  alignItems: 'center',
                }}
              />

              <Link
                href="/auth/forget-password"
                className="text-kprimary text-sm font-normal"
              >
                Forget Password
              </Link>
            </div>

            <footer style={{ paddingTop: '1.2em', textAlign: 'center' }}>
              <AppButton name="Login" type="submit" />
            </footer>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
