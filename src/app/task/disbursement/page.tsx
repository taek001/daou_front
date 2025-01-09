"use client"
import Disbursement from "@/component/task/disbursement/Disbursement"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {useAppDispatch} from "@/redux/hooks";
import {setSelected} from "@/redux/task/budget/budget-slice";
export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelected([]));
  }, [router])

  return (
    <div>
      <Disbursement/>
    </div>
  );
}
