"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {useEffect} from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/task/budget');
  }, []);
  return (
    <div></div>
  );
}
