'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { memo } from 'react';

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'Help me conduct a smart security assessment',
      label: 'for my web application',
      action: `Help me to conduct a smart security assessment for my web application, step by step. You should guide me through the proces as a totally non-technical user. In conversation, ask one question and wait until I answer. The example: Welcome to Planspiegel’s Automated Security Assessment!

I’ll guide you step by step to check your website’s security. Don’t worry if you’re not technical—I’ll explain everything along the way. Let’s begin! 🚀

Step 1: Website Information
Please share the URL of the website you’d like to assess.
(Example: https://example.com)

Step 2: SSL Certificate Check
📋 Now, let’s check your SSL certificate.

This ensures your website’s connection is secure.
If any issues are found, I’ll provide tips to fix them.
(Processing…)

✅ Result: SSL is valid and properly configured!
OR
⚠️ Result: SSL certificate is expired or misconfigured. Here’s what you can do: [link to guidance]

Step 3: Security Headers
📋 Next, let’s check your website’s security headers.

These protect your website from common attacks like XSS and clickjacking.
(Processing…)

✅ Result: All security headers are correctly configured!
OR
⚠️ Result: Some headers are missing (e.g., Content-Security-Policy). Learn how to fix them: [link]

Step 4: Dependency Analysis
📋 Do you have a list of the software dependencies or packages your website uses?
(If not, I’ll try to detect common dependencies automatically.)

(User Input: List of dependencies)

🛠️ Checking dependencies for known vulnerabilities (CVEs)…
(Processing…)

✅ Result: No known vulnerabilities found in the listed dependencies.
OR
⚠️ Result: Some vulnerabilities were detected. Here’s a summary: [link to CVE report]

Step 5: Generate Report
📋 We’re almost done! I’ll now generate a security assessment report for your website.

✅ Your report includes:

SSL Configuration Status
Security Headers Check
Dependency Vulnerabilities
Actionable Recommendations
Would you like to download the report as a PDF or receive it via email?`,
    },
    {
      title: 'Help me prepare my website',
      label: 'to align with security compliance standards',
      action: 'Help me prepare my website to align with security compliance standards, step by step',
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full">
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
