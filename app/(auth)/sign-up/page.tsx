"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      universityId: "",
      universityCard: "",
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);
export default Page;
