import El from "@/library/El";

const counter = (width = "w-7", height = "h-7", fontSize = "text-sm") => {
  let count = 0;
  const countEl = El({
    element: "span",
    child: count.toString(),
    className: `${width} ${height} bg-gray-100 text-gray-700 ${fontSize} flex justify-center items-center`,
  });
  const decrementBtn = El({
    element: "button",
    dataAction: "decrement",
    className: `flex justify-center items-center bg-gray-100 ${width} ${height} text-gray-600 rounded-l-xl cursor-pointer outline-none -mr-px`,
    child: El({
      element: "span",
      child: "-",
      className: `align-text-bottom ${fontSize}`,
    }),
  });
  const incrementBtn = El({
    element: "button",
    dataAction: "increment",
    className: `flex justify-center items-center bg-gray-100 text-gray-600 rounded-r-xl cursor-pointer ${width} ${height} ${fontSize} -ml-px`,
    child: El({
      element: "span",
      child: "+",
      className: `align-text-bottom ${fontSize}`,
    }),
  });

  decrementBtn.addEventListener("click", () => {
    if (count > 0) {
      count--;
      countEl.textContent = count.toString();
      const x = calculatePrice(count);
      document.getElementById("totalPriceSpan").innerHTML = x;
    }
  });

  incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count.toString();
    const x = calculatePrice(count);
    document.getElementById("totalPriceSpan").innerHTML = x;
  });

  function calculatePrice(num, price = 100) {
    return `$${num * price}`;
  }

  return El({
    element: "div",
    child: El({
      element: "div",
      className: "flex flex-row rounded-full relative bg-transparent",
      child: [decrementBtn, countEl, incrementBtn],
    }),
  });
};

export default counter;
