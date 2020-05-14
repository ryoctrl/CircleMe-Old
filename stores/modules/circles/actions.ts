import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

const getCirclesRequest = actionCreator.async<string, number, Error>('GET_CIRCLES_REQUEST');