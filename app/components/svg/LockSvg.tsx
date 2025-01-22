import { useEffect, useState } from "react";
import "./styles.css";

interface LockButtonProps {
  isChecked: boolean;
}

const LockButton: React.FC<LockButtonProps> = ({ isChecked }) => {
  const [isLocked, setIsLocked] = useState(true);

  // Función para manejar el cambio de estado
  useEffect(() => {
    setIsLocked(!isChecked);
  },[isChecked]);

  return (
    <div
      style={{ position: "absolute", height: "100%" }}
      className="top-1/2 left-1/2 -translate-x-1/2 pointer-events-none"
    >
      <input
        id="inpLock"
        type="checkbox"
        style={{ display: "none" }}
        checked={isLocked}
        onChange={()=>{}}
      />
      <label className={`btn-lock ${isLocked ? "" : ""}`} htmlFor="inpLock">
        <svg width="36" height="45" viewBox="0 0 36 40">
          <path
            className={`lockb ${!isLocked && " lockmovement"}`}
            d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"
          ></path>
          <path
            className={`lock border-2 ${
              !isLocked && "arkmovement arkmovement2"
            }`}
            d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"
          ></path>
          <path className="bling" d="M29 20L31 22"></path>
          <path className="bling" d="M31.5 15H34.5"></path>
          <path className="bling" d="M29 10L31 8"></path>
        </svg>
      </label>
    </div>
  );
};

export default LockButton;
