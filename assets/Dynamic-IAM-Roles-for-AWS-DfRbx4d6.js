import{j as e}from"./index-DD_Jzo_l.js";function a(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"what-does-that-even-mean",children:"What does that even mean"}),`
`,e.jsx(s.p,{children:"Okay, to start, we should have a context of what AWS IAM roles are. An IAM role gives a user access to AWS resources in line with the policy attached to the role. This means we can use the AWS SDKs or the CLI to interact with different resources. Unlike IAM users, IAM roles are not tied to a specific user or group, and they are temporary, meaning the credentials given to a client are only set to work for a limited time (usually an hour) before they expire."}),`
`,e.jsx(s.p,{children:"So, why exactly would you want to use dynamic roles like this? Well, there are a couple of compelling reasons:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Temporary Access"}),": You want users to access a resource without needing a permanent IAM account. For instance, a guest might need access to a shopping cart to view items or checkout, but you don’t want to create and manage an IAM user account for this temporary access."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Enhanced Security"}),": Dynamic roles can enhance security by limiting the duration and scope of access. For example, you can issue temporary credentials to a user for a specific task, and once the task is completed, the credentials expire. This minimizes the risk of long-term exposure."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Cross-Account Access"}),": If you need to grant access to resources in a different AWS account, you can use IAM roles. For example, an application in Account A might need to access resources in Account B. You can create a role in Account B that allows Account A to assume it, enabling cross-account resource access."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Federated Access"}),": You can use IAM roles to provide access to AWS resources for users who are authenticated by external identity providers (e.g., Google, Facebook, or corporate SSO). This is useful for integrating AWS services with existing authentication systems."]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"how-to-create-and-use-dynamic-iam-roles-with-sts",children:"How to Create and Use Dynamic IAM Roles with STS"}),`
`,e.jsx(s.p,{children:"AWS Security Token Service (STS) is used to create temporary security credentials. Here’s a quick overview of how you can use STS to create dynamic IAM roles:"}),`
`,e.jsxs(s.h3,{id:"1-define-an-iam-role",children:["1. ",e.jsx(s.strong,{children:"Define an IAM Role"})]}),`
`,e.jsx(s.p,{children:"First, create an IAM role with a policy that defines what resources the role can access. Here’s an example of a simple role policy:"}),`
`,e.jsx(s.pre,{className:"language-json",children:e.jsxs(s.code,{className:"language-json code-highlight",children:[e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token punctuation",children:"{"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token property",children:'"Version"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"2012-10-17"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token property",children:'"Statement"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["    ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Effect"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"Allow"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Action"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"s3:GetObject"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Resource"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"arn:aws:s3:::example-bucket/*"'}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["    ",e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})]})}),`
`,e.jsxs(s.h3,{id:"2-allow-sts-to-assume-the-role",children:["2. ",e.jsx(s.strong,{children:"Allow STS to Assume the Role"})]}),`
`,e.jsx(s.p,{children:"Modify the role’s trust policy to allow STS to assume the role. For example:"}),`
`,e.jsx(s.pre,{className:"language-json",children:e.jsxs(s.code,{className:"language-json code-highlight",children:[e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token punctuation",children:"{"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token property",children:'"Version"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"2012-10-17"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token property",children:'"Statement"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["    ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Effect"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"Allow"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Principal"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["        ",e.jsx(s.span,{className:"token property",children:'"Service"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"sts.amazonaws.com"'}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token punctuation",children:","}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["      ",e.jsx(s.span,{className:"token property",children:'"Action"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"sts:AssumeRole"'}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["    ",e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:["  ",e.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]}),e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})]})}),`
`,e.jsxs(s.h3,{id:"3-use-sts-to-assume-the-role",children:["3. ",e.jsx(s.strong,{children:"Use STS to Assume the Role"})]}),`
`,e.jsx(s.p,{children:"You can use the AWS SDK or CLI to assume the role and obtain temporary credentials. Here’s an example using the AWS CLI:"}),`
`,e.jsx(s.pre,{className:"language-bash",children:e.jsx(s.code,{className:"language-bash code-highlight",children:e.jsxs(s.span,{className:"code-line",children:["aws sts assume-role --role-arn ",e.jsx(s.span,{className:"token string",children:'"arn:aws:iam::123456789012:role/MyRole"'})," --role-session-name ",e.jsx(s.span,{className:"token string",children:'"MySession"'}),`
`]})})}),`
`,e.jsx(s.p,{children:"This command will return temporary security credentials (Access Key ID, Secret Access Key, and Session Token) that you can use to interact with AWS services."}),`
`,e.jsxs(s.h3,{id:"4-use-the-temporary-credentials",children:["4. ",e.jsx(s.strong,{children:"Use the Temporary Credentials"})]}),`
`,e.jsx(s.p,{children:"Configure your AWS SDK or CLI to use the temporary credentials. For example, with the AWS CLI:"}),`
`,e.jsx(s.pre,{className:"language-bash",children:e.jsxs(s.code,{className:"language-bash code-highlight",children:[e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token builtin class-name",children:"export"})," ",e.jsx(s.span,{className:"token assign-left variable",children:"AWS_ACCESS_KEY_ID"}),e.jsx(s.span,{className:"token operator",children:"="}),e.jsx(s.span,{className:"token string",children:'"temp-access-key-id"'}),`
`]}),e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token builtin class-name",children:"export"})," ",e.jsx(s.span,{className:"token assign-left variable",children:"AWS_SECRET_ACCESS_KEY"}),e.jsx(s.span,{className:"token operator",children:"="}),e.jsx(s.span,{className:"token string",children:'"temp-secret-access-key"'}),`
`]}),e.jsxs(s.span,{className:"code-line",children:[e.jsx(s.span,{className:"token builtin class-name",children:"export"})," ",e.jsx(s.span,{className:"token assign-left variable",children:"AWS_SESSION_TOKEN"}),e.jsx(s.span,{className:"token operator",children:"="}),e.jsx(s.span,{className:"token string",children:'"temp-session-token"'}),`
`]})]})}),`
`,e.jsx(s.p,{children:"You can now use these credentials to access AWS resources as defined by the IAM role."})]})}function t(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{t as default};
