import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import AuthLayout from '../../components/shared/AuthLayout';
import { PasswordField } from '../../components/shared/FormComponent';
import { AppButton } from '../../components/shared/Widget';

const ResetPassword = () => {
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
        title="Create a new password"
        bannerTitle={() => <h3 className="text-kblack"></h3>}
      >
        <div className="form_container" style={{ flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PasswordField
              label="Choose a new password:"
              // {...name}
              required={true}
              placeholder="***********"
              {...register('password', { required: true })}
            />

            <PasswordField
              label="Confirm password:"
              // {...name}
              required={true}
              placeholder="***********"
              {...register('password', { required: true })}
            />

            <footer
              className="mt-10"
              style={{ paddingTop: '1.2em', textAlign: 'center' }}
            >
              <AppButton
                name="Create Password"
                type="submit"
                onPress={() => router.push('/auth/email-verified')}
              />
            </footer>
          </form>
        </div>
      </AuthLayout>
    </div>
  );
};

export default ResetPassword;
