module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { transform: "rotate(0deg) scale(65%)" },
          "100%": { transform: "rotate(360deg) scale(100%)" },
        },
      },
      animation: {
        loading: "loading 2s linear infinite"
      },
    },
  },
  plugins: []
};
