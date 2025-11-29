import { useEffect, useState } from "react";

class ApiService {
  async getUser() {
    return fetch("/api/user").then((res) => res.json());
  }
}

export function useUser() {
  const [user, setUser] = useState(null);
  const api = new ApiService();

  useEffect(() => {
    api.getUser().then(setUser);
  }, []);

  return user;
}
