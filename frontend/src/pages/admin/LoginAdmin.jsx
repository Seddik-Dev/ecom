import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

import characterImg from "../../assets/images/character.png";
import { getUser, login } from "../../services/authService";

const socialProviders = [
  { icon: FaFacebookF, label: "Facebook", color: "text-blue-600" },
  { icon: FaTwitter, label: "Twitter", color: "text-sky-400" },
  { icon: FaGithub, label: "GitHub", color: "text-slate-800" },
  { icon: FaGoogle, label: "Google", color: "text-red-500" },
];

export default function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);

      const response = await getUser();

      console.log(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log(form);

  //   try {
  //     await login(form);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Panneau gauche : illustration */}
      <div className="relative hidden overflow-hidden bg-slate-50 lg:block">
        {/* Logo */}
        <div className="absolute left-10 top-8 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-indigo-500">
            <path d="M12 2 L21 6 L16.5 22 L12 14 L7.5 22 L3 6 Z" />
          </svg>
          <span className="text-xl font-bold text-slate-700">Ecommerce</span>
        </div>

        {/* Forme décorative en bas */}
        <div className="absolute bottom-0 left-0 h-64 w-full bg-slate-200/60 [clip-path:ellipse(75%_100%_at_30%_100%)]" />

        {/* Cercle derrière le personnage */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200" />

        {/* Personnage */}
        <img
          src={characterImg}
          alt="Illustration"
          className="relative z-10 mx-auto mt-50 h-[520px] w-auto object-contain"
        />
      </div>

      {/* Panneau droit : formulaire */}
      <div className="relative flex items-center justify-center bg-white px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <h1 className="mb-2 text-2xl font-bold text-slate-800">
            Welcome to Ecommerce! 👋
          </h1>
          <p className="mb-8 text-sm text-slate-500">
            Please sign-in to your account and start the adventure
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="identifier"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email or Username
              </label>
              <input
                id="identifier"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="············"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 pr-10 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword
                      ? "Masquer le mot de passe"
                      : "Afficher le mot de passe"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4.5 w-4.5" />
                  ) : (
                    <Eye className="h-4.5 w-4.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-500 focus:ring-indigo-500"
                />
                Remember Me
              </label>
              <a
                href="#"
                className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-slate-600">
              New on our platform?{" "}
              <a
                href="#"
                className="font-medium text-indigo-500 hover:text-indigo-600"
              >
                Create an account
              </a>
            </p>
          </form>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">or</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="flex items-center justify-center gap-5">
            {socialProviders.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                type="button"
                aria-label={`Continuer avec ${label}`}
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-slate-50 ${color}`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Bouton flottant Buy Now */}
        <a
          href="#"
          className="absolute bottom-6 right-6 rounded-full bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition-colors hover:bg-rose-600"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
