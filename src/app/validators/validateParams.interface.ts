export default interface IValidateParams {
    properties: {
      // The id should be a number. If it is not (the request.params object
      // always has string properties) the hook tries to convert it to a number
      // before returning a "400 - Bad Request".
      id: { type: string; }
    },
    type: string,
}