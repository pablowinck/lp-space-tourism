module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "blue-dark": "#0B0D17",
      "blue-light": "#D0D6F9",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      backgroundImage: {
        "home-desktop": 'url("./home/background-home-desktop.jpg")',
        "destination-desktop":
          'url("./destination/background-destination-desktop.jpg")',
        "crew-desktop": 'url("./crew/background-crew-desktop.jpg")',
        "technology-desktop":
          'url("./technology/background-technology-desktop.jpg")',
      },
    },
  },
  plugins: [],
};
