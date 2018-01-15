import bodyParser from 'body-parser';


const commonMiddlewares = () => [
  bodyParser.json(),
];


export default commonMiddlewares;
