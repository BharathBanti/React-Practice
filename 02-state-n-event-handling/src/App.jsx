import { useState } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [userData, setUserData] = useState({});
  const [userIn, setUserIn] = useState(false);
  const [AuthForm, setAuthForm] = useState('login');

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
        {userIn ? (
          <WelcomeScreen userData={userData} />
        ) : AuthForm === 'signup' ? (
          <SignUp
            setAuthForm={setAuthForm}
            setUserData={setUserData}
            setUserIn={setUserIn}
          />
        ) : (
          <Login
            setAuthForm={setAuthForm}
            setUserData={setUserData}
            setUserIn={setUserIn}
          />
        )}
      </div>
    </main>
  );
}

export default App;
