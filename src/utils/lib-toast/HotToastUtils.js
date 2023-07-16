import toast from "react-hot-toast";

// https://react-hot-toast.com/docs/toast
export function toastGoodNews(message) {
    return toast.success(message);
}

export function toastBadNews(message) {
    return toast.error(message);
}

export function toastWarning(message) {
    return toast(message);
}

export function dimissAllToasts() {
    return toast.dismiss();
}

export function removeAllToasts() {
    return toast.remove();
}

export function toastPromise({ promise, loadingMessage, responseHandler, errorHandler }) {
    return toast.promise(
        promise, { 
            loading: loadingMessage, 
            success: responseHandler,
            error: errorHandler,
        }
    );
}

// For more
//https://daily.dev/blog/create-smoking-hot-toast-notifications-in-react-with-react-hot-toast