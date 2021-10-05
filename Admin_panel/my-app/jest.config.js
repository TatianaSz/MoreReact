/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {

  roots: ["<rootDir>/src/components"],
  transform: {

    "^.+\\.tsx?$": "ts-jest"

  },


  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
 
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]

};