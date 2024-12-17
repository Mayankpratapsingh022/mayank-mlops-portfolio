"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

interface EmailProps {
  email: string;
}

const EmailComponent: React.FC<EmailProps> = ({ email }) => {
  return (
    <div className="flex justify-start text-base text-pretty dark:prose-invert  items-center gap-2 py-2"> 
          <FaEnvelope className="text-lg text-pretty" />
      <a
        href={`mailto:${email}`}
        className=" font-normal  underline hover:text-gray-200"
      >
        {email}
      </a>
    </div>
  );
};

export default function Email() {
  return <EmailComponent email="mayankpratapsingh022@gmail.com" />;
}
