import path from 'path';


const staticRoutes = {
  description: {
    namespace: '/',
  },
  body: {
    '/*': {
      method: 'get',
      handler: (req, res) => {
        res.sendFile(path.join(__dirname, '../../../', 'src/index.html'));
      },
    },
  },
};


export default staticRoutes;
