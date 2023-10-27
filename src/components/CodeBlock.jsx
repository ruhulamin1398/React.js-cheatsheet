import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Clipboard from 'clipboard';

const CodeBlock = ({ language, code , title }) => {
  const codeRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const clipboard = new Clipboard(codeRef.current);
    clipboard.on('success', () => {
      setIsCopied(true);
      clipboard.destroy();
    });
    clipboard.onClick(new Event('click'));
  };

  return (
    <div className="relative m-5 w-full md:w-2/3   mx-auto">
      <div className="bg-gray-800 p-3  text-white font-semibold mb-[-9px] ">

      <p>{title}</p>
      <button
        ref={codeRef}
        data-clipboard-text={code}
        onClick={handleCopy}
        className="absolute right-0 top-0 text-white border-blue-200  p-1  px-3 m-1 rounded cursor-pointer"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      </div>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
