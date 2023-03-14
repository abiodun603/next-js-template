import Head from 'next/head';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs fullstact App Template</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        {/* <Header/> */}
        <main>{children}</main>
        <div className="mx-auto" />
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default PrimaryLayout;
