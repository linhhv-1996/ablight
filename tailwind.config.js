/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ // Đảm bảo bạn có phần này
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: { center: true, padding: "1rem" },
        extend: {
            fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"] },
            colors: {
                base: {
                    bg: "#0b0b0d",
                    card: "#121216",
                    line: "rgba(255,255,255,0.08)",
                    soft: "rgba(255,255,255,0.04)"
                },
                brand: {
                    DEFAULT: "#10b981", // emerald-500
                    light: "#34d399",  // emerald-400
                    dark: "#059669"   // emerald-600
                }
            },
            boxShadow: { glow: "0 0 40px -8px rgba(16,185,129,0.35)" }
        }
    }
}
