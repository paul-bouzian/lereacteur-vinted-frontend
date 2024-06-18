import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUpload({ file, setFile }) {
  const message =
    file.length !== 0
      ? file.map((f) => f.name).join(" | ")
      : "Ajoute une photo";

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles);
    },
    [setFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="relative w-full">
      <input
        {...getInputProps()}
        type="file"
        id="fileInput"
        className="hidden"
        onChange={(e) => setFile([...e.target.files])}
      />
      <button
        type="button"
        onClick={() => document.getElementById("fileInput").click()}
        className="flex h-48 w-full cursor-pointer items-center justify-center rounded border-2 border-dashed border-teal-600 bg-white text-teal-600 hover:bg-gray-100"
      >
        <svg
          className="mr-2 h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        {isDragActive ? "Déposez le fichier ici" : message}
      </button>
    </div>
  );
}

export default FileUpload;
