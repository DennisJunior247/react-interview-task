import toastr from "toastr";

toastr.options = {
  positionClass: "toast-top-right",
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: false,
  preventDuplicates: true,
  onclick: () => true,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 500,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"

};

export const ToastMessage = (header: "SUCCESS" | "INFO" | "ERROR" | "WARN", message: string) => {
  let type: "success" | "info" | "error" | "warning";
  switch (header) {
    case "SUCCESS":
      type = "success";
      break;

    case "INFO":
      type = "info";
      break;

    case "ERROR":
      type = "error";
      break;

    case "WARN":
      type = "warning";
      break;

    default:
      type = "info";
      break;
  }

  toastr[type](message);
};


