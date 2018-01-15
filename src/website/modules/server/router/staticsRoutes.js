import path from 'path';


const staticRoutes = {
  description: {
    namespace: '/',
  },
  body: {
    '/*': {
      method: 'get',
      handler: (req, res) => {
        res.sendFile(path.join(__dirname, '../../../', 'index.html'));
      },
    },
  },
};


export default staticRoutes;
