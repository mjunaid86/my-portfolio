export const aiInnovationCards = [
  {
    id: "gemini-code-review",
    title: "Gemini Code Review Bot",
    subtitle: "Automated Architectural & Quality Guardrails",
    description: "Contributed to an AI-powered Gemini Code Review Bot integrated into the development pipeline to review code against engineering standards, anti-patterns, security considerations and business-logic rules before merge.",
    workflow: [
      { step: "01", label: "Code Commit", desc: "Pull request submitted to repository" },
      { step: "02", label: "Gemini AI Review", desc: "Analyzes against engineering rules & security criteria" },
      { step: "03", label: "Automated Findings", desc: "Generates actionable review comments inline" },
      { step: "04", label: "Engineer Remediation", desc: "Developer verifies and updates code before merge" }
    ],
    tags: ["Gemini AI", "Automated Code Review", "Security Auditing", "CI/CD Gateways"]
  },
  {
    id: "ai-agent-skills",
    title: "Reusable AI Agent Skills",
    subtitle: "Standardized Engineering Knowledge for AI Workflows",
    description: "Created reusable AI Agent Skills to support standardized engineering practices across teams and projects.",
    examples: [
      {
        name: "FastAPI Backend Standards",
        detail: "Enforces strict Pydantic models, asynchronous handlers, status codes, and unified API error payloads."
      },
      {
        name: "MongoDB Atlas Search Best Practices",
        detail: "Standardizes aggregation pipelines, compound indexing structures, and search query efficiency."
      },
      {
        name: "Automated JS / TS Docstrings",
        detail: "Standardizes typed interface documentation, method descriptions, and JSDoc conventions across codebases."
      }
    ],
    tags: ["Agent Skills", "FastAPI Standards", "MongoDB Best Practices", "Docstrings"]
  },
  {
    id: "ai-assisted-development",
    title: "AI-Assisted Product Development",
    subtitle: "Accelerated Delivery with Applied Engineering Discipline",
    description: "Contributed to building the FE Dashboard and supporting platform using AI-assisted development practices to accelerate implementation and improve development consistency.",
    pillars: [
      {
        title: "Accelerated Prototyping",
        desc: "Rapid component scaffolding and state structure exploration without sacrificing production rigor."
      },
      {
        title: "Consistency Enforcement",
        desc: "Maintaining unified interface patterns, type safety, and responsive design systems."
      },
      {
        title: "Developer Velocity",
        desc: "Automating repetitive boilerplate, allowing focused attention on complex business domain logic."
      }
    ],
    tags: ["Applied AI", "Velocity Acceleration", "Frontend Architecture", "Engineering Discipline"]
  }
];
