import { useState } from 'react';
import Loading from './Loading';

function SignUp({ setAuthForm, setUserData, setUserIn }) {
  const [signupError, setSignupError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleLogin() {
    setAuthForm('login');
  }

  async function postUser() {
    const userCreated = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...signupData,
        id: Date.now(),
      }),
    });

    if (!userCreated.ok) {
      throw new Error("Failed to create an account, try again later")
    }
  }

  async function createUser() {
    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${signupData.email}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setSignupError('User already exists. Please Login');
        return false;
      } else {
        setSignupError('');
        await postUser();
        return true;
      }
    } catch {
      setSignupError('Signup Failed');
      return false;
    }
  }

  async function onSignup(e) {
    e.preventDefault();

    if(signupData.password !== signupData.confirmPassword){
      setSignupError('Password not matched, try again');
    }

    setIsLoading(true);

    setTimeout(async () => {
      const success = await createUser();

      if(success){
        setUserData(signupData);
        setUserIn(true);
        setAuthForm('login');
      }

      setIsLoading(false);
      setSignupData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }, 500);
  }

  return (
    <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Join the space
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Create account
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Start with a clean, simple signup form.
        </p>
      </div>

      <form className="space-y-5" onSubmit={onSignup}>
        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="signup-name"
          >
            Name
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="text"
            name="name"
            id="signup-name"
            value={signupData.name}
            onChange={(e) =>
              setSignupData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="signup-email"
          >
            Email
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="email"
            name="email"
            id="signup-email"
            value={signupData.email}
            onChange={(e) =>
              setSignupData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="someone@gmail.com"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="signup-password"
          >
            Password
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="password"
            name="password"
            id="signup-password"
            value={signupData.password}
            onChange={(e) =>
              setSignupData((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter your password"
          />
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="confirm-password"
          >
            Confirm password
          </label>
          <input
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={signupData.confirmPassword}
            onChange={(e) =>
              setSignupData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            placeholder="Confirm your password"
          />
        </div>

        {signupError && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {signupError}
          </p>
        )}

        <button
          className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : 'Signup'}
        </button>

        <p className="text-center text-sm text-slate-500">
          Already have an account?
          <span
            className="ml-1 cursor-pointer font-semibold text-blue-600 transition hover:text-blue-700"
            onClick={handleLogin}
          >
            Login
          </span>
        </p>
      </form>
    </section>
  );
}

export default SignUp;
