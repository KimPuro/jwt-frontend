"use client";
import Link from "next/link";

import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/Button";
import { TextField } from "@/components/Fields";
import { useState } from "react";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const snap = useSnapshot(state);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://192.168.0.252:8080/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 500) {
      state.isLogin = true;
      alert("로그인 성공");
      router.push("/");
    }
  };
  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          계정이 없으신가요?{" "}
          <Link href="/register" className="text-cyan-600">
            회원 가입
          </Link>{" "}
          여기를 눌러 가입하세요.
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full">
          Sign in to account
        </Button>
      </form>
    </AuthLayout>
  );
}
