import { useDropzone } from "react-dropzone";
import classNames from "../../../../utils/classNames";

export default function UploadPDF({ onChange }) {
  const onDrop = (file) => {
    if (file.length >= 1) {
      onChange(file[0]);
    }
  };

  const fileValidator = (file) => {
    // check if file size is greater than 1mb
    if (file.size > 1000000) {
      return {
        code: "size-too-large",
        message: `file is larger than 1mb`,
      };
    }

    return null;
  };

  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
    open,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    validator: fileValidator,
    onDrop,
    multiple: false,
    noClick: true,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const acceptClassName = isDragAccept ? " bg-gray-100 border-blue-400 " : "";

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li className="text-gray-800" key={file.name}>
      {file.name}
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li className="text-center text-red-500" key={file.name}>
      <ul className="text-center text-red-500">
        {errors.map((e) => (
          <li key={e.code}>{e.code}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <label className="mb-2 block">Upload PDF File</label>
      <div className="overflow-x-scroll">
        <div
          {...getRootProps()}
          className={classNames(
            "relative mb-10 flex w-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-gray-300 py-5 transition-colors",
            acceptClassName
          )}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <p className="mb-2 text-lg text-gray-700">
              Drag and Drop file here
            </p>
            <p className="mb-5 text-sm text-gray-400">Files supported: pdf</p>
            <button
              type="button"
              onClick={open}
              className="rounded-md bg-gray-200 px-7 py-2.5 text-gray-700 transition-colors hover:bg-gray-300"
            >
              Browse
            </button>
          </div>
          {isDragReject && (
            <p className="text-red-500">
              Filetype is not allowed. Please upload a pdf file
            </p>
          )}
          {acceptedFileItems}
          {fileRejectionItems}
        </div>
      </div>
    </>
  );
}
