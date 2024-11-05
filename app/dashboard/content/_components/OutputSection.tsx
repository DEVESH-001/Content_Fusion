import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}
function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef(); //with this ref we can access the editor instance

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="text-lg font-medium">Your Result</h2>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(aiOutput);
          }}
        >
          <Copy className="flex gap-2" />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => {
          console.log(editorRef.current.getInstance().getMarkdown());
        }}
      />
    </div>
  );
}

export default OutputSection;
