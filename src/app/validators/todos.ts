import IValidateBody from './validateBody.interface';
import IValidateParams from './validateParams.interface';

const TodosBodyValidator: IValidateBody = {
    // The body request should be an object once parsed by the framework.
    // Every additional properties that are not defined in the "properties"
    // object should be removed.
    additionalProperties: false,
    properties: {
      // The "text" property of ctx.request.body should be a string if it exists.
      text: { type: 'string' }
    },
    // The property "text" is required.
    required: [ 'text' ],
    type: 'object',
};

const TodosParamsValidator: IValidateParams = {
    properties: {
      // The id should be a number. If it is not (the request.params object
      // always has string properties) the hook tries to convert it to a number
      // before returning a "400 - Bad Request".
      id: { type: 'number' }
    },
    type: 'object',
}

export { TodosBodyValidator, TodosParamsValidator };