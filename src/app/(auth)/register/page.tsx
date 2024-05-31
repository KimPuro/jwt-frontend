import { type Metadata } from "next";
import Link from "next/link";

import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { SelectField, TextField } from "@/components/Fields";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Register() {
  return (
    <AuthLayout
      title="Sign up for an account"
      subtitle={
        <>
          계정이 있으신가요?{" "}
          <Link href="/login" className="text-cyan-600">
            로그인
          </Link>{" "}
          여기를 눌러 로그인하세요.
        </>
      }
    >
      <form>
        <div className="grid grid-cols-2 gap-6">
          <TextField
            label="First name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full">
          회원 가입하기
        </Button>
      </form>
    </AuthLayout>
  );
}
