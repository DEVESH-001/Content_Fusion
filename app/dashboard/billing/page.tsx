"use client";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader, Loader2Icon } from "lucide-react";
import moment from "moment";
import { useContext, useState } from "react";

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const CreateSubscription = () => {
    setLoading(true);
    //api call using axios
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, //razorpay keyID
      subscription_id: subId,
      name: "ContentFusion",
      description: "Monthly Subscription",
      // "image": "/logo.png",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };
    //@ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (paymentId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("YYYY-MM-DD"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };
  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
        <div className="flex gap-8 max-w-4xl w-full">
          {/* Free Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Free</h3>
            <p className="text-4xl font-bold text-gray-900 mb-4">
              $0 <span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✅ 10,000 Words/Month</li>
              <li>✅ 50+ Content Templates</li>
              <li>✅ Unlimited Download & Copy</li>
              <li>✅ 1 Month of History</li>
            </ul>
            <Button className="w-full bg-gray-300 text-gray-700 cursor-not-allowed">
              Currently Active Plan
            </Button>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Monthly
            </h3>
            <p className="text-4xl font-bold text-blue-600 mb-4">
              20Rs <span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>✅ 100,000 Words/Month</li>
              <li>✅ 50+ Template Access</li>
              <li>✅ Unlimited Download & Copy</li>
              <li>✅ 1 Year of History</li>
            </ul>
            <Button
              disabled={loading}
              onClick={() => CreateSubscription()}
              className="w-full bg-purple-600 text-white hover:bg-primary gap-2 items-center text-center"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {userSubscription ? "Active Plan" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
