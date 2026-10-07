"use client";

import { signIn, useSession } from "@/lid/auth-client";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";

const SignInPage = () => {
  const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
const {data:resData,error}= await signIn.email({
  email:data.email,
  password:data.password,
  callbackURL:"/profile"
});


console.log(resData, error);
  };
const {data,isPending,error} = useSession();

  return (
    <div className="flex items-start justify-center bg-gray-50 px-2 py-4 min-h-screen">
      <Form
        className="w-full max-w-md rounded-xl bg-gray-50 p-8"
        onSubmit={onSubmit}
      >
        <Fieldset>
          <Fieldset.Legend className="text-center text-3xl font-bold text-red-700 mb-6">
            সাইন ইন
          </Fieldset.Legend>

          <FieldGroup className="space-y-4">
            {/* Email Field */}
            <TextField isRequired name="email" type="email">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                ইমেইল
              </Label>
              <Input
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50/50"
                placeholder=""
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Password Field */}
            <TextField isRequired minLength={8} name="password" type="password">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                পাসওয়ার্ড
              </Label>
              <Input
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50/50"
                placeholder=""
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions className="mt-6">
            <Button
              type="submit"
              className="w-full rounded-md bg-red-700 py-2.5 text-sm font-semibold text-white hover:bg-red-800 transition"
            >
              সাইন ইন করুন
            </Button>
          </Fieldset.Actions>
        </Fieldset>

        {/* Footer Sign Up Prompt */}
        <div className="mt-6 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <a
            href="/signup"
            className="font-medium text-red-700 hover:underline"
          >
            সাইন আপ করুন
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
