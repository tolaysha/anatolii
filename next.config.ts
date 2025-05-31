import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // Отключает индикатор сборки
    buildActivityPosition: "bottom-left", // Позиция индикатора (если включен)
  },
};

export default nextConfig;
