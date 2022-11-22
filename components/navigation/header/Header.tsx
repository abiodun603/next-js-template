export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  return (
    <header
      {...headerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <div className='flex justify-between items-center'>
        <p>Home</p>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;
