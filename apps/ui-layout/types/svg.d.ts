declare module '*.svg' {
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
}
// declaration.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}
