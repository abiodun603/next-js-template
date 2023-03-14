import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AuthLayout from '../../components/shared/AuthLayout';
import { TextField } from '../../components/shared/FormComponent';
import { AppButton } from '../../components/shared/Widget';
const ForgetPassword = () => {
  const { handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <AuthLayout
        title="Forget Password"
        discription="Enter the email associated with your account 
        to retrieve your password"
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

            <footer
              className="mt-10"
              style={{ paddingTop: '1.2em', textAlign: 'center' }}
            >
              <AppButton
                name="Submit"
                type="submit"
                onPress={() => router.push('/auth/reset-password')}
              />
            </footer>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};

export default ForgetPassword;
