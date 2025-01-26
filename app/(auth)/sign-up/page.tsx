"use client";

import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";
import { signUp } from "@/lib/action/auth";

const Page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      universityId: 0,
      universityCard: "",
      email: "",
      password: "",
    }}
    onSubmit={signUp}
  />
);
export default Page;
