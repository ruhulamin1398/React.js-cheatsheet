import React from 'react';
import CodeBlock from './CodeBlock';

const ReactRouterDom = () => {


    const install = `npm install react-router-dom`;
    const router = `const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: '',
              element: <App />
            },
            {
              path: '/route',
              element: <ReactRouterDom />
            },
          ],
        }
      ])`

      const provider = `    <RouterProvider router={router} />`;
    return (
        <>
        <CodeBlock title="Install"  code={install} language='jsx'               />
        <CodeBlock title="Main.jsx"  code={router} language='jsx'  />
        <CodeBlock title="Main.jsx"  code={provider} language='jsx'  />
        
        

        </>
    );
}

export default ReactRouterDom;
