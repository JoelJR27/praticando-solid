import { useEffect, useState } from "react";
import formatData from "./formatador";

export default function useLoadUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const response = await fetch("https://api.example.com/user");
      
      const data = await response.json();
      
      const formattedUser = formatData(data);

      setUser(formattedUser);
    }

    loadUser();
  }, []);

  return user;
}
