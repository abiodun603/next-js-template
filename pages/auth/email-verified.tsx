import { useRouter } from 'next/router';
import AuthLayout from '../../components/shared/AuthLayout';
import { AppButton } from '../../components/shared/Widget';

const EmailVerify = () => {
  const router = useRouter();

  return (
    <div>
      <AuthLayout
        title="Recovery link sent!"
        discription="We have sent you a verification link to your email address. Please check to proceed."
        bannerTitle={() => <h3 className="text-kblack"></h3>}
      >
        <div className="mt-20 flex justify-center">
          <AppButton
            name="Back to login"
            type="button"
            onPress={() => router.push('/auth/reset-password')}
            style={{ width: '80%' }}
          />
        </div>
      </AuthLayout>
    </div>
  );
};

export default EmailVerify;
