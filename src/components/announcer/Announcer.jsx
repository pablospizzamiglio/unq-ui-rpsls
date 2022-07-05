import "./announcer.css";

import { useEffect, useState } from "react";

export const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const useTypedMessage = (message) => {
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    setTypedMessage("");

    if (message.length) {
      (async () => {
        let visibleMessage = "";
        for (let i = 0; i < message.length; i++) {
          await wait(25);

          visibleMessage = visibleMessage + message[i];

          setTypedMessage(visibleMessage);
        }
      })();
    }
  }, [message]);

  return typedMessage;
};

const Announcer = ({ message }) => {
  // const typedMessage = useTypedMessage(message);

  return (
    <div className="announcer">
      <div className="announcer-item">
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default Announcer;
