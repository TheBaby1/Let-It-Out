import LoginBox from '../components/login/LoginBox';

const LoginLayout = ({ children }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-[#E3FDFD]">
                <div className="relative sm:max-w-sm w-full">
                      <LoginBox />
                </div>
            </div>
        </>
    );
}

export default LoginLayout;