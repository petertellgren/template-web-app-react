import type { ReactElement } from "react";
import { createContext, useCallback, useMemo, useState } from "react";
import { produce } from "immer";
import { getCrypto } from "react-utils";
import { Toast } from "../Toast/Toast";
import type { ToastOptions } from "../Toast/ToastClasses";
import type { ToastNotifierAlert } from "./ToastNotifierClasses";

interface IToastNotifierContext {
  addAlert: (alertOptions: ToastOptions) => void;
  alerts: ToastNotifierAlert[];
  reset: () => void;
}

const ToastNotifierContext = createContext<IToastNotifierContext | null>(null);

interface Props {
  children: ReactElement | ReactElement[];
}

function ToastNotifierProvider({ children }: Props): ReactElement {
  const [alerts, setAlerts] = useState<ToastNotifierAlert[]>([]);

  const handleClosed = useCallback((id: string) => {
    setAlerts((prevAlerts) =>
      produce(prevAlerts, (draft) => {
        const index = draft.findIndex((alert) => alert.id === id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
        return draft;
      })
    );
  }, []);

  const addAlert = useCallback(
    (alertOptions: ToastOptions) => {
      const id = getCrypto().randomUUID();

      setAlerts((prevAlerts) =>
        produce(prevAlerts, (draft) => {
          draft.unshift({
            id,
            element: <Toast key={id} {...alertOptions} onClosed={(): void => handleClosed(id)} />,
          });
          return draft;
        })
      );
    },
    [handleClosed]
  );

  const reset = useCallback(() => {
    setAlerts([]);
  }, []);

  const value = useMemo(() => {
    return {
      addAlert,
      alerts,
      reset,
    };
  }, [addAlert, alerts, reset]);

  return <ToastNotifierContext.Provider value={value}>{children}</ToastNotifierContext.Provider>;
}

export type { IToastNotifierContext };
export { ToastNotifierProvider, ToastNotifierContext };
