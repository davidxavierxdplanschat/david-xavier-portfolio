import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', outputFileTracingRoot: process.cwd(), images: { unoptimized: true }, trailingSlash: true };
export default config;
