import { InlineSnippet } from "@/components/form/domain-configuration";
import Image from "next/image";
import CTA from "@/components/CTA";
import SiteCard from "@/components/site-card";

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 bg-black">
      <Image
        width={512}
        height={512}
        src="/logo.png"
        alt="Billions Platforms"
        className="w-48"
      />
      <h1 className="text-white">
        Welcome to Billion&apos;s Platform
        <InlineSnippet className="ml-2 bg-blue-900 text-blue-100">
          Click an option below to get started.
        </InlineSnippet>
        <SiteCard />
      </h1>
    </div>
  );
}
