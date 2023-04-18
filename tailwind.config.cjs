/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.js",
    "./main.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  // plugins: [require("flowbite/plugin")],
  plugins: [require("flowbite/plugin")],
};
