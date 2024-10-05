"use client";

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function FileUpload() {
  return (
    <FilePond
      server={{
        process: '/api/upload',
        fetch: null,
        revert: null,
      }}
    />
  );
}
