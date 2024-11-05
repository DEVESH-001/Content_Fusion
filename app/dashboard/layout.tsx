//dashboard layout
"use client";
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import { UpdateCreditUsage } from "../(context)/UpdateCreditUsage";
import SideNavTwo from "@/app/dashboard/_components/SideNavTwo"

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<boolean>(false);
  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UserSubscriptionContext.Provider
        value={{ userSubscription, setUserSubscription }}
      >
        <UpdateCreditUsage.Provider
          value={{ updateCreditUsage, setUpdateCreditUsage }}
        >
          <div className="bg-slate-100 h-screen ">
            <div className="md:w-64  hidden md:block fixed ">
              {/* <SideNav /> */}
              <SideNavTwo/>
            </div>
            <div className="md:ml-64">
              <Header />
              {children}
            </div>
          </div>
        </UpdateCreditUsage.Provider>
      </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default layout;
