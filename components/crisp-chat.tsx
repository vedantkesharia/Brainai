"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f5267488-bc72-4d7f-9f09-04ef05a54fdd");
  }, []);

  return null;
};