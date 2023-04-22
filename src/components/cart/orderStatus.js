import El from "@/library/El";

const orderStatus = (status) => {
  return El({
    element: "div",
    child: status,
    className:
      "h-full w-[62%] flex justify-center items-center px-2.5 text-[12px] rounded-3xl bg-black text-white",
  });
};

export default orderStatus;
