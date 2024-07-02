/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/html/*.html","./public/js/*.js","./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        pinkretro:"#F075AA",
        purpleretro:"#BC5A94",
        yellowretro:"#FFDE95",
        grayretro:"#ADADAD",
        darkgrayretro:"#55595F",
        greenretro:"#9ADB83"
      },
      backgroundImage: {
        pattern: "url(../src/images/pattern-home.svg)",
        grass: "url(../src/images/grass.svg)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

