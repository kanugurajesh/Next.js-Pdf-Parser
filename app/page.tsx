"use client";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { useState } from "react";

export default function FileUpload() {
  const [fileResponse, setFileResponse] = useState(null);

  return (
    <div>
      <FilePond
        server={{
          process: {
            url: "/api/upload",
            method: "POST",
            withCredentials: false,
            onload: (response) => {
              // parse the json response
              const fileResponse = JSON.parse(response);
              console.log(fileResponse);
              setFileResponse(fileResponse);
              return response; // Return the response to FilePond
            },
            onerror: (response) => {
              console.error("Upload error:", response);
              return response; // Return the error to FilePond
            },
          },
          fetch: null,
          revert: null,
        }}
      />

      {fileResponse && (
        <div className="p-5">
          <h1 className="font-black text-xl">Text from the Pdf :-</h1>
          {/* @ts-expect-error - This is needed because it giving parsedText is not found on type never */}
          <pre className="text-wrap p-5">{fileResponse.parsedText}</pre>
        </div>
      )}
    </div>
  );
}
