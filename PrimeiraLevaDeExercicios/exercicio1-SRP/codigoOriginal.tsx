import { useEffect, useState } from "react";

export function UserProfile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch("https://api.example.com/user");
      const data = await response.json();
      const formatted = {
        name: data.name.toUpperCase(),
        age: data.age + " anos",
      };
      setUser(formatted);
    }

    loadUser();
  }, []);

  if (!user) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <span>{user.age}</span>
    </div>
  );
}