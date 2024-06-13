"use client";

import { useState } from "react";

export const useFile = () => {
  const [fileValue, setFileValue] = useState<File | null>(null);
  const handleChangeFile = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const files = (event.target as HTMLInputElement).files;
    if (files) setFileValue(files?.[0]);
  };

  return {
    fileValue,
    handleChangeFile,
  };
};
