import React from "react";
import InformationCard from "./InformationCard";
import InformaitonMainCard from "./InformationMainCard";
import "../../componentStyle/Information&Treatment/InformationCardHolder.css";
export default function InformationCardHolder() {
  return (
    <div className="Information-Scroll">
      <div className="Information-Holder">
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformationCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
        <InformaitonMainCard />
      </div>
    </div>
  );
}
