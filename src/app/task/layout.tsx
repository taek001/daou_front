"use client"

import reduxProvider from "@/redux/provider";
import {store} from "@/redux/store";
import {Provider} from "react-redux";
import PageTitle from '@/component/task/common/PageTitle'
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Provider store={store}>
        <PageTitle/>
        {children}
      </Provider>
    </div>

  );
}