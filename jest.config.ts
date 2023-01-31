export default {
  preset: "ts-jest",
  clearMocks: true,
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.css$": "identity-obj-proxy",
  },
};
