import { useEffect, useState } from "react";
import { humanizeDate } from "../../utils/humanizeDate";

type LastActivityProps = {
  lastUpdate: Date;
};

/**
 * Here we force a re-render every 60 seconds by updating
 * the humanized date to keep up to date the data
 * of last activity as time passes
 */
const LastActivity = ({ lastUpdate }: LastActivityProps) => {
  const [lastActivity, setLastActivity] = useState<string>(
    humanizeDate(lastUpdate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLastActivity(humanizeDate(lastUpdate));
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [lastUpdate]);

  return lastActivity;
};

export default LastActivity;
