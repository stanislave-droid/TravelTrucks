import toast from "react-hot-toast";
import css from "./Toast.module.css";
import Button from "../Button/Button";
import { IoMdClose } from "react-icons/io";
import { MdError } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import clsx from "clsx";

export type ToastStyle = "info" | "error";

interface ToastProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
}

function Toast({ onClose, icon, children }: ToastProps): React.ReactNode {
  return (
    <div className={clsx(css.toast, !icon && css["toast--no-icon"])}>
      {icon && icon}
      <p className={css.message}>{children}</p>
      {onClose && (
        <Button onClick={onClose} className={css.closeBtn} variant="white">
          <IoMdClose className="" size={24} />
        </Button>
      )}
    </div>
  );
}

export default function showToast(
  message: string,
  icon?: React.ReactNode,
  style?: ToastStyle,
) {
  const toastId = toast(
    <Toast icon={icon} onClose={() => toast.dismiss(toastId)}>
      {message}
    </Toast>,
    {
      className: clsx(css["wrapper"], css[`wrapper--${style}`]),
    },
  );
}

export function showError(message: string) {
  showToast(message, <MdError size={32} className={css.errorIcon} />, "error");
}

export function showInfo(message: string) {
  showToast(
    message,
    <CiCircleInfo size={32} className={css.errorIcon} />,
    "info",
  );
}
