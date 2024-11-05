// "use client";
// import FormSection from "../_components/FormSection";
// import OutputSection from "../_components/OutputSection";
// import { TEMPLATE } from "../../_components/TemplateListSection";
// import Templates from "@/app/(data)/Templates";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { chatSession } from "@/utils/AiModal";
// import { useContext, useState } from "react";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
// import { UpdateCreditUsage } from "@/app/(context)/UpdateCreditUsage";

// interface PROPS {
//   params: {
//     "template-slug": string;
//   };
// }

// // interface PROPS {
// //   params:
// //     | Promise<{
// //         "template-slug": string;
// //       }>
// //     | {
// //         "template-slug": string;
// //       };
// // }

// function CreateNewContent(props: PROPS) {
//   const selectedTemplate: TEMPLATE | undefined = Templates?.find(
//     (item: TEMPLATE) => item.slug === props.params["template-slug"]
//   );

//   const [loading, setLoading] = useState(false);
//   const { userSubscription, setUserSubscription } = useContext(
//     UserSubscriptionContext
//   );

//   const { updateCreditUsage, setUpdateCreditUsage } =
//     useContext(UpdateCreditUsage);

//   /**
//    * use to generate AI content
//    * @param formDara
//    * @returns
//    */

//   // saving data from Google Gemini
//   const [aiOutput, setAiOutput] = useState<string>("");
//   const { user } = useUser();
//   const router = useRouter();

//   const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

//   const GenerateAIContent = async (formData: any) => {
//     if (totalUsage >= 10000 && !userSubscription) {
//       console.log("You have reached the limit");
//       router.push("/dashboard/billing");
//       return;
//     }
//     setLoading(false);
//     const SelectedPrompt = selectedTemplate?.aiPrompt;
//     const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
//     const result = await chatSession.sendMessage(FinalAIPrompt);
//     //console.log(result.response.text());

//     setAiOutput(result?.response.text());
//     await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
//     setLoading(false);

//     //update the total usage
//     setUpdateCreditUsage(Date.now());
//   };

//   // saving info in the DB
//   const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
//     const result = await db.insert(AIOutput).values({
//       formData: formData,
//       templateSlug: slug,
//       aiResponse: aiResp,
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format("YYYY-MM-DD "),
//     });

//     console.log(result);
//   };

//   //saving info in the DB
//   // const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
//   //   const result = await db.insert(AIOutput).values({
//   //     formData: formData,
//   //     templateSlug: slug ||" ",
//   //     aiResponse: aiResp,
//   //     createdBy: user?.primaryEmailAddress?.emailAddress,
//   //     createdAt: moment().format("YYYY-MM-DD "),
//   //   });
//   // };

//   return (
//     <div className="p-10">
//       <Link href={"/dashboard"}>
//         <Button>
//           {" "}
//           <ArrowLeft /> Back
//         </Button>
//       </Link>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
//         {/* Form Section */}
//         <FormSection
//           selectedTemplate={selectedTemplate}
//           userFormInput={(v: any) => GenerateAIContent(v)}
//           loading={loading}
//         />
//         {/* Output Section */}
//         <div className="col-span-2">
//           <OutputSection aiOutput={aiOutput} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateNewContent;

// 22222 22222 22222  22222 22222 22222
// "use client";

// import FormSection from "../_components/FormSection";
// import OutputSection from "../_components/OutputSection";
// import { TEMPLATE } from "../../_components/TemplateListSection";
// import Templates from "@/app/(data)/Templates";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { chatSession } from "@/utils/AiModal";
// import { useContext, useState } from "react";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
// import { useRouter } from "next/navigation";
// import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
// import { UpdateCreditUsage } from "@/app/(context)/UpdateCreditUsage";

// interface PROPS {
//   params: {
//     "template-slug": string;
//   };
// }

// function CreateNewContent(props: PROPS) {
//   const selectedTemplate: TEMPLATE | undefined = Templates?.find(
//     (item: TEMPLATE) => item.slug === props.params["template-slug"]
//   );

//   const [loading, setLoading] = useState(false);
//   const { userSubscription, setUserSubscription } = useContext(
//     UserSubscriptionContext
//   );

//   const { updateCreditUsage, setUpdateCreditUsage } =
//     useContext(UpdateCreditUsage);

//   // Saving data from Google Gemini
//   const [aiOutput, setAiOutput] = useState<string>("");
//   const { user } = useUser();
//   const router = useRouter();

//   const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

//   const GenerateAIContent = async (formData: any) => {
//     if (totalUsage >= 10000 && !userSubscription) {
//       console.log("You have reached the limit");
//       router.push("/dashboard/billing");
//       return;
//     }
//     setLoading(false);
//     const SelectedPrompt = selectedTemplate?.aiPrompt;
//     const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
//     const result = await chatSession.sendMessage(FinalAIPrompt);

//     setAiOutput(result?.response.text());
//     await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
//     setLoading(false);

//     // Update the total usage
//     setUpdateCreditUsage(Date.now());
//   };

//   const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
//     const result = await db.insert(AIOutput).values({
//       formData: formData,
//       templateSlug: slug,
//       aiResponse: aiResp,
//       createdBy: user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format("YYYY-MM-DD "),
//     });

//     console.log(result);
//   };

//   return (
//     <div className="p-10">
//       <Link href={"/dashboard"}>
//         <Button>
//           <ArrowLeft /> Back
//         </Button>
//       </Link>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
//         {/* Form Section */}
//         <FormSection
//           selectedTemplate={selectedTemplate}
//           userFormInput={(v: any) => GenerateAIContent(v)}
//           loading={loading}
//         />
//         {/* Output Section */}
//         <div className="col-span-2">
//           <OutputSection aiOutput={aiOutput} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateNewContent;





"use client";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { useContext, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCreditUsage } from "@/app/(context)/UpdateCreditUsage";

// Updated PROPS interface to resolve possible type issues with `params`
interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item: TEMPLATE) => item.slug === props.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );

  const { updateCreditUsage, setUpdateCreditUsage } =
    useContext(UpdateCreditUsage);

  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000 && !userSubscription) {
      console.log("You have reached the limit");
      router.push("/dashboard/billing");
      return;
    }
    setLoading(false);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt);
    setAiOutput(result?.response.text());
    await SaveInDb(formData, selectedTemplate?.slug, result?.response.text());
    setLoading(false);

    // Update the total usage
    setUpdateCreditUsage(Date.now());
  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("YYYY-MM-DD"),
    });

    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;

// If using server-side rendering to pass `params`
export async function getServerSideProps(context: any) {
  const { params } = context;
  return {
    props: {
      params: {
        "template-slug": params["template-slug"],
      },
    },
  };
}
