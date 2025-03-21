// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };










// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {
// 			animation: {
// 				"fade-in": "fadeIn 0.5s ease-in-out",
// 				"slide-in": "slideIn 0.4s ease-in-out",
// 			},
// 			keyframes: {
// 				fadeIn: {
// 					"0%": { opacity: "0" },
// 					"100%": { opacity: "1" },
// 				},
// 				slideIn: {
// 					"0%": { transform: "translateY(20px)", opacity: "0" },
// 					"100%": { transform: "translateY(0)", opacity: "1" },
// 				},
// 			},
// 		},
// 	},
// 	plugins: [],
// };











/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		// colors:{
		//   primary: "#ed8900",
		//   secondary: "#ed8900",
		// },
		container:{
		  center:true,
		  padding:{
			DEFAULT: "1rem",
			sm: "3rem",
		  }
		}
	  },
	},
	plugins: [],
  };
  
  