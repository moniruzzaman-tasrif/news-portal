"use client"


import { signUp } from '@/lid/auth-client';
import { Button , FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';

import React from 'react';
import { Bounce, toast } from 'react-toastify';

const SignInPage = () => {
 const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data=Object.fromEntries(formData.entries()) as Record<string, string> ;
    console.log(data);

    const { data: resData, error } = await signUp.email({
      name:data.name,
      image:data.image,
      email:data.email,
      password:data.password,

      callbackURL: "/",
    });
    if (resData){
            toast.success("✅ Sign up successful!", {
              position: "bottom-right",
              autoClose: 600,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
              transition: Bounce,
            });
redirect("/")
    }else{

      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });


    }

  };
  return (
    <div className="flex  items-center justify-center bg-gray-50 px-2 py-4">
      <Form
        className="w-full max-w-md rounded-xl  bg-gray-50 p-8 "
        onSubmit={onSubmit}
      >
        <Fieldset>
          <Fieldset.Legend className="text-center text-3xl font-bold text-red-700 mb-2">
            সাইন আপ
          </Fieldset.Legend>

          <FieldGroup className="space-y-2">
            {/* Name Field */}
            <TextField
              isRequired
              name="name"
              validate={value => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                নাম
              </Label>
              <Input
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50/50"
                placeholder=""
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            {/* Image Field */}
            <TextField name="image">
              <Label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </Label>
              <Input
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50/50"
                placeholder=""
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

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
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={value => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
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

          <Fieldset.Actions className="">
            <Button
              type="submit"
              className="w-full rounded-md bg-red-700  text-sm font-semibold text-white hover:bg-red-800 transition"
            >
              সাইন আপ করুন
            </Button>
          </Fieldset.Actions>
        </Fieldset>

        {/* Footer Login Prompt */}
        <div className="mt-6 text-center text-sm text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <a href="/login" className="font-medium text-red-700 hover:underline">
            সাইন ইন করুন
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
