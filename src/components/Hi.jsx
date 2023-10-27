import React from 'react';
import CodeBlock from './CodeBlock';
const codeExample = ` <div className="App">
<h1>Code Highlighter with Copy Option</h1>
<CodeBlock language="javascript" code={codeExample} />
</div>`

const Hi = () => {
    return (
   <>
   
   
   <div className="mx-auto w-1/2">
      <h1>Code Highlighter with Copy Option</h1>
      <CodeBlock language="javascript" title={"Example Code"}  code={codeExample} />
    </div>

 



</>
    );
}

export default Hi;
