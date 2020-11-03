module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    // eslint-disable-next-line no-useless-escape
    '^@\/(.*?\.?(js|vue)?|)$': '<rootDir>/packages/$1'
  },
  coverageDirectory: '<rootDir>/tests/unit/coverage', // 覆盖率报告的目录
  // collectCoverage: true,
  collectCoverageFrom: [ // 测试报告想要覆盖那些文件，目录，前面加！是避开这些文件
    // 'src/components/**/*.(js|vue)',
    'packages/**/*.js',
    // '!packages/**/src/*.(js|vue)'
  ],
  // testMatch: [ //匹配测试用例的文件
  //   // '<rootDir>/tests/unit/spec/CartTotal.spec.js'
  // ],
}
