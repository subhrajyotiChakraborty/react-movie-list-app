import { toast } from "react-toastify";

export const showToast = (isSuccess, toastMessage) => {
  toast(toastMessage, {
    onOpen: (props) => {},
    onClose: (props) => {},
    autoClose: 6000,
    type: isSuccess ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
  });
};
