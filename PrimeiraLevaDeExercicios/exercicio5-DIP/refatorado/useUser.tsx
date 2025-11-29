import { useEffect, useState } from "react";
import { IApiService } from "./interface/IApiService";

interface Props {
  api: IApiService;
  endpoint: string;
}

export function useUser({ api, endpoint }: Props) {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    api.getUser(endpoint).then(setUser);
  }, []);

  return user;
}
