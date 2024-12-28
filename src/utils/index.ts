export const breakpoints = {
  mobile: "600px",
  tablet: "768px",
  desktop: "1024px",
};

export function convertPathToTitle(path: string) {
  if (path.startsWith('/')) {
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  }
  return path;
}
