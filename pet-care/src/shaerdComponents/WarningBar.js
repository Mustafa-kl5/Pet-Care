import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/WarningBar.css";

export default function WarningBar(props) {
  const [showWarning, setShowWarning] = useState(props.showWarning);

  useEffect(() => {
    setShowWarning(props.showWarning);
  }, [props.showWarning]);

  return showWarning ? (
    <div className="warning-holder">
      <div className="warning-icon"></div>
      <div className="warning-massage">{props.massage}</div>
    </div>
  ) : null;
}
