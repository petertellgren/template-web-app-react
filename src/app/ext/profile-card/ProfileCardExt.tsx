import type { ReactElement } from "react";
import useProfileInfo from "../../api/queries/user/profile-info/UseProfileInfo";
import useAuth from "../../auth/UseAuth";
import ProfileCardResponsive from "~/components/library/profile-card-responsive/ProfileCardResponsive";

export default function ProfileCardExt(): ReactElement {
  const { logout } = useAuth();
  const { data } = useProfileInfo();

  function handleLogout(): void {
    logout();
  }

  if (!data) {
    return <ProfileCardResponsive />;
  }

  const { email, firstName, lastName } = data;
  return <ProfileCardResponsive name={`${firstName} ${lastName}`} email={email} onLogout={handleLogout} />;
}
