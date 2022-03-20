var dark = require("./tailwindcss/darkMode.json")
var light = require("./tailwindcss/lightMode.json")

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //DARK_MODE 
        DarkBg: dark.bg,
        DarkStorm: dark.storm,
        DarkText: dark.text,
        DarkBlack: dark.black,
        DarkGreen: dark.green,
        DarkRed: dark.red,
        DarkYellow: dark.yellow,
        DarkBlue: dark.blue,
        DarkMagenta: dark.magenta,
        DarkWhite: dark.white,
        DarkGui: dark.gui,
        //LIGHT_MODE 
        Bg: light.bg,
        Text: light.text,
        Black: light.black,
        Green: light.green,
        Red: light.red,
        Yellow: light.yellow,
        Blue: light.blue,
        Magenta: light.magenta,
        White: light.white,
        Gui: light.gui,
      },
    },
  },

  plugins: [],
  content: ["./src/**/*.{html,js,svelte,ts,css}"],
};

// module.exports = config;
