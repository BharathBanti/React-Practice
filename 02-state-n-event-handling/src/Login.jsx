import { useState } from 'react';
import Loading from './Loading';

function Login({ setAuthForm, setUserData, setUserIn }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  function handleCreateAccount() {
    setAuthForm('signup');
  }

  async function verifyUser(email, password) {
    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      if (!res.ok) {
        throw new Error('Request failed');
      }

      const data = await res.json();

      if (data.length > 0) {
        setUserData(data[0]);
        setUserIn(true);
        setAuthForm('');
        setLoginError('');
        setLoginData({
          email: '',
          password: '',
        });
      } else {
        setLoginError('Invalid email or password.');
      }
    } catch {
      setLoginError('Unable to log in right now. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function onLogin(e) {
    e.preventDefault();
    if (isLoading) return;

    const email = loginData.email.trim();
    const password = loginData.password.trim();

    if (!email || !password) {
      setLoginError('Please enter both email and password.');
      return;
    }

    setLoginError('');
    setIsLoading(true);

    setTimeout(() => {
      verifyUser(email, password);
    }, 500);
  }

  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Welcome back
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Login
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Sign in to continue with your account.
        </p>
      </div>

      <form className="space-y-5" onSubmit={onLogin}>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="login-email"
          >
            Email
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="email"
            name="email"
            id="login-email"
            value={loginData.email}
            placeholder="someone@gmail.com"
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="login-password"
          >
            Password
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="password"
            name="password"
            id="login-password"
            value={loginData.password}
            placeholder="Enter your password"
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {loginError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {loginError}
          </p>
        )}

        <button
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : 'Login'}
        </button>

        <p className="text-center text-sm text-slate-500">
          New here?
          <span
            className="ml-1 cursor-pointer font-semibold text-blue-600 transition hover:text-blue-700"
            onClick={handleCreateAccount}
          >
            Create an account
          </span>
        </p>
      </form>
    </section>
  );
}

export default Login;
