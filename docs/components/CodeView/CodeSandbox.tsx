import React from 'react';
import LZString from 'lz-string';
import { html, css, dependencies } from './utils';

function compress(string) {
  return LZString.compressToBase64(string)
    .replace(/\+/g, `-`) // Convert '+' to '-'
    .replace(/\//g, `_`) // Convert '/' to '_'
    .replace(/=+$/, ``); // Remove ending '='
}

interface CodeSandboxProps {
  code?: string;
  children?: React.ReactNode;
  files?: { name: string; content: string }[];
}

const CodeSandbox = (props: CodeSandboxProps) => {
  const { code, children, files } = props;
  const depsFiles = {};

  files?.forEach(file => {
    depsFiles[file.name] = { content: file.content };
  });

  const parameters = {
    files: {
      'package.json': {
        content: {
          dependencies
        }
      },
      'index.js': { content: code },
      'index.html': { content: html },
      'styles.css': { content: css },
      ...depsFiles
    }
  };

  return (
    <form
      action="https://codesandbox.io/api/v1/sandboxes/define"
      target="_blank"
      method="POST"
      style={{ display: 'inline-block' }}
    >
      <input type="hidden" name="parameters" value={compress(JSON.stringify(parameters))} />
      {children}
    </form>
  );
};

export default CodeSandbox;
