import El from "@/library/El";
import radioButton from "../address/radioButton";

const paymentCart = (
  paymentLogo,
  paymentName,
  paymentPrice,
  paymentDefault
) => {
  return El({
    element: "div",
    className:
      "flex items-center justify-between px-4 py-6 rounded-xl mb-4 bg-white mx-4",
    child: [
      El({
        element: "div",
        className: "flex items-center gap-3",
        child: [
          paymentLogo,
          El({
            element: "span",
            child: paymentName,
            className: "font-bold",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex items-center gap-3",
        child: [
          El({
            element: "span",
            className: "font-medium text-sm",
            child: paymentPrice,
          }),
          radioButton(paymentDefault),
        ],
      }),
    ],
  });
};

export default paymentCart;
