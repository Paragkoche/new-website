type svg = {
  className?: string;
};

const Background = ({ className }: svg) => {
  return (
    <svg
      viewBox="0 0 1400 1101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1307 20C1307 8.95431 1315.95 0 1327 0H1380C1391.05 0 1400 8.95429 1400 20V1081C1400 1092.05 1391.05 1101 1380 1101H229C217.954 1101 209 1092.05 209 1081C209 1069.95 200.046 1061 189 1061H115C103.954 1061 95 1069.95 95 1081C95 1092.05 86.0457 1101 75 1101H20C8.95431 1101 0 1092.05 0 1081V20C0 8.9543 8.95432 0 20 0H929C940.046 0 949 8.9543 949 20V30C949 41.0457 957.954 50 969 50H1287C1298.05 50 1307 41.0457 1307 30V20Z"
      />
    </svg>
  );
};

export default Background;
