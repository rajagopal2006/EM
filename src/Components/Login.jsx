import { useState } from "react";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { email, password };
    setUsers([...users, newUser]);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <label>Password</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <h3>Logged-in Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
