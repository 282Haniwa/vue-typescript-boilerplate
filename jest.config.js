module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(vue)$': 'vue-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
};
