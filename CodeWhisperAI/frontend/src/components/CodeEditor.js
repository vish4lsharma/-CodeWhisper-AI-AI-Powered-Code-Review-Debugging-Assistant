import React from 'react';
import AceEditor from 'react-ace';

// Explicitly import the modes we need
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp'; // Use 'c_cpp' instead of 'cpp'
import 'ace-builds/src-noconflict/theme-monokai';

function CodeEditor({ code, setCode, language, setLanguage }) {
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c_cpp">C++</option> {/* Update to match mode name */}
      </select>
      <AceEditor
        mode={language} // This will now match the imported modes
        theme="monokai"
        value={code}
        onChange={setCode}
        width="100%"
        height="400px"
        setOptions={{ fontSize: '14px' }}
      />
    </div>
  );
}

export default CodeEditor;