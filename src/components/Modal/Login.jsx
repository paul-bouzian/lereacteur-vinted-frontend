import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-full w-full flex-col items-center gap-20">
      <h2 className="text-2xl">Se connecter</h2>
      <form
        action=""
        className="flex w-full flex-col items-center gap-10 px-10 lg:w-2/3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full rounded border-b border-red-100 p-4 outline-none"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full rounded border-b border-red-100 p-4 outline-none"
        />
        <input
          type="submit"
          className={`text-md mt-6 w-full cursor-pointer truncate rounded border border-teal-700 bg-teal-700 p-2 text-white hover:bg-white hover:text-teal-700`}
          value={"Se connecter"}
        />
      </form>
    </div>
  );
}

export default SignUp;
