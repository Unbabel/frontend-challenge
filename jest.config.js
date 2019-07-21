module.exports = {
  transform: {
    ".+\\.(css|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"]
};
