import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function FileUpload({ file, setFile, isSeveral }) {
  const message =
    file.length !== 0
      ? file.map((f) => f.name).join(" | ")
      : "Ajoute une photo";

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(isSeveral ? acceptedFiles : acceptedFiles[0]);
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
        onChange={(e) =>
          setFile(
            isSeveral ? [...e.target.files] : [...file, e.target.files[0]],
          )
        }
      />
      <button
        type="button"
        onClick={() => document.getElementById("fileInput").click()}
        className={`flex h-48 w-full cursor-pointer items-center justify-center rounded border-2 border-dashed border-teal-600 text-teal-600 transition-all duration-300 hover:bg-gray-100 ${isDragActive ? "bg-teal-700 text-white" : "bg-white"}`}
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
