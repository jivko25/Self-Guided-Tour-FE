'use client';
import Button from "../Buttons/Button";
import ButtonGoogle from "../Buttons/ButtonGoogle";

import * as React from "react";
import InputField from "../InputField";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or form submission logic here
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      // Submit the form or perform further validation
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-stone-900/opacity-30" style={{ height: 'calc(100vh - 120px)' }}>
      <div>
        <form
        className="flex items-center justify-evenly flex-col w-[582px] h-[602px] relative bg-neutral-50 rounded-tl-[5px] rounded-tr-[5px]"
        action=" "
        onSubmit={handleSubmit}
      >
        <ButtonGoogle />
        <div className="w-[400px] h-[17px] justify-center items-center gap-2 inline-flex">
          <div className="w-[182px] h-[0px] border border-zinc-400"></div>
          <div className="text-center text-zinc-400 text-sm font-medium font-['Inter Tight']">
            OR
          </div>
          <div className="w-[183px] h-[0px] border border-zinc-400"></div>
        </div>

        <InputField
          id="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={error}
          hint="Please enter a valid email address"
          required
        />

        <InputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={error}
          hint="Your password must be at least 8 characters long"
          required
        />

        <Link href="/sign-in">
          <Button variant="primary-long" text="Sign In" />
        </Link>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
