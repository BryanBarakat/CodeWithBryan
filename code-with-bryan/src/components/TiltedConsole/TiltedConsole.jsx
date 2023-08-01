import React from "react";
import "./TiltedConsole.css";

const TiltedConsole = () => {
  return (
    <div className="console-container">
      <div className="console">
        <pre className="code">
          {`function greet() {
  console.log("Hello, World!");
}

greet();`}
        </pre>
      </div>
    </div>
  );
};
export default TiltedConsole;
