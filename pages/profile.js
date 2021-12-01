import { useUser } from "@auth0/nextjs-auth0";

const Profile = (props) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <a href="/api/auth/login">Login</a>;

  return (
    user && (
      <div className={props.classes}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;