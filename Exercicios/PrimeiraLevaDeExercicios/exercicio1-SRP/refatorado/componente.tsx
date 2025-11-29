import useLoadUser from "./useLoadUser";

export function UserProfile() {
  const user = useLoadUser();
  return (
    <>
      {!user && <p>Carregando...</p>}

      {user && (
        <div>
          <h1>{user.name}</h1>
          <span>{user.age}</span>
        </div>
      )}
    </>
  );
}
