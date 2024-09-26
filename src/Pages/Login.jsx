import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold text-primary">
            {state === "Sign Up" ? "Create an account" : "Login"}
          </p>
          <p className="text-zinc-500">
            Please {state === "Sign Up" ? "sign up" : "login"} to book
            appointment
          </p>
          {state === "Sign Up" && (
            <div className="w-full">
              <p>Enter your full name</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setName(e.target.name)}
                value={name}
              />
            </div>
          )}

          <div className="w-full">
            <p>Enter your Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setEmail(e.target.email)}
              value={email}
            />
          </div>
          <div className="w-full">
            <p>Enter your Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setPassword(e.target.password)}
              value={password}
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            {state === "Sign Up" ? "Sign up" : "login"}
          </button>

          <div className="mt-3">
            {state === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-primary underline cursor-pointer font-bold"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-primary underline cursor-pointer font-bold"
                >
                  Sign up here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
