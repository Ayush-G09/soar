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

export function generateRandomId() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  return `${day} ${month} ${year}`;
}

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;