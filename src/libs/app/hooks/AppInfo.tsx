const useAppInfo = () => {
  const appName = "Web App";
  const appNameCapital = appName.toUpperCase();

  return {
    appName,
    appNameCapital,
  };
};

export default useAppInfo;
