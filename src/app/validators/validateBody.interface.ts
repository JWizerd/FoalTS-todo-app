export default interface IValidateBody {
    // The body request should be an object once parsed by the framework.
    // Every additional properties that are not defined in the "properties"
    // object should be removed.
    additionalProperties: boolean;
    properties: {
      // The "text" property of ctx.request.body should be a string if it exists.
      text: { type: string; }
    },
    // The property "text" is required.
    required: string[],
    type: string,
}