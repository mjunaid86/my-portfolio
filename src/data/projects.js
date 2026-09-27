export const projectsData = [
  {
    id: "aerotrade",
    title: "Aerotrade",
    category: "Aviation Digital Platform",
    tagline: "Digital aviation parts platform & centralized self-service CMS",
    description: "Digital aviation parts platform supporting aircraft parts browsing, purchasing, and operational workflows.",
    longDescription: "Aerotrade serves as the central digital aviation parts marketplace, enabling airlines and MRO operators to browse, quote, and acquire certified aircraft components with streamlined procurement workflows.",
    businessProblem: "Legacy platform architecture constrained scalability and introduced friction for rapid feature rollout, while routine application configuration updates required engineering intervention.",
    solution: "Led the backend modernization from Node.js and Firebase into a high-performance FastAPI and MongoDB microservices architecture. Concurrently architected Aerotrade CMS, a centralized platform enabling business users to configure application settings independently.",
    myRole: "Technical leadership and backend/platform engineering.",
    contribution: "Led the modernization from Node.js + Firebase to FastAPI + MongoDB. Engineered Aerotrade CMS for self-service business configuration.",
    impact: "Significantly enhanced platform throughput, reliability, and maintainability, while eliminating engineering dependency for routine configuration management.",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "Node.js",
      "Firebase",
      "React",
      "GCP",
      "REST APIs"
    ],
    highlights: [
      "Modernized legacy stack to FastAPI + MongoDB",
      "Centralized self-service Aerotrade CMS",
      "End-to-end operational workflow automation"
    ]
  },
  {
    id: "mdc",
    title: "Material Demand Center (MDC)",
    category: "Aviation MRO / Material Management",
    tagline: "Lifecycle tracking for aircraft parts requests across airlines & stations",
    description: "Digital platform managing aircraft parts requests across multiple airlines and MRO operations through the delivery lifecycle.",
    longDescription: "MDC orchestrates the entire demand and fulfillment cycle for aircraft maintenance materials, linking airline line stations, central maintenance hubs, and logistics coordinators in real time.",
    businessProblem: "Fragmented parts procurement workflows across disparate airline operational bases caused fulfillment bottlenecks and limited visibility into aircraft on ground (AOG) material status.",
    solution: "Architected and delivered the Material Demand Center as a centralized digital platform, establishing standardized requisition lifecycles, milestone tracking, and cross-airline status transparency.",
    myRole: "Led the development and launch of MDC.",
    contribution: "Spearheaded platform architecture, core service development, and successful launch across maintenance stations.",
    impact: "Streamlined multi-airline aircraft parts fulfillment, minimized requisition lead times, and established end-to-end tracking visibility.",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "REST APIs",
      "GCP"
    ],
    highlights: [
      "Led end-to-end development & platform launch",
      "Multi-airline demand coordination",
      "Real-time material lifecycle tracking"
    ]
  },
  {
    id: "rmc",
    title: "Repair Management Center (RMC)",
    category: "Aviation MRO",
    tagline: "Line-maintenance operations & aircraft part-removal tracking",
    description: "Digital platform supporting aircraft line-maintenance operations and aircraft part-removal tracking.",
    longDescription: "RMC provides line maintenance engineers and repair coordinators with dedicated operational tooling to log, verify, and monitor components removed from active aircraft for maintenance or overhaul.",
    businessProblem: "Manual part-removal logging and disparate records increased administrative overhead and risked operational delays during scheduled and unscheduled maintenance turns.",
    solution: "Engineered a streamlined, role-specific digital platform tailored for line engineers to track part removals, component serialization, and repair routing instantaneously.",
    myRole: "Technical leadership and backend development.",
    contribution: "Delivered scalable microservices and robust data schemas supporting high-reliability operational use on the tarmac and hangars.",
    impact: "Accelerated maintenance turnaround logging, enhanced component auditability, and reduced administrative overhead for line engineers.",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "REST APIs"
    ],
    highlights: [
      "Tarmac & hangar operational tooling",
      "Serialized component removal audit trail",
      "Seamless integration with maintenance workflows"
    ]
  },
  {
    id: "centralized-material-service",
    title: "Centralized Material Service",
    category: "Enterprise Data Integration",
    tagline: "High-frequency consolidation of enterprise Pickslip data",
    description: "Centralized service consolidating Pickslip data from multiple enterprise sources including BMS and LMS.",
    longDescription: "An enterprise integration hub that bridges disparate legacy maintenance and logistics systems, unifying Pickslip data into a single coherent interface with aggressive refresh cadences.",
    businessProblem: "Data fragmentation across legacy BMS and LMS systems caused conflicting inventory viewpoints, delayed warehouse fulfillment, and stale records in consumer applications.",
    solution: "Designed and deployed a resilient integration service that continuously ingests, validates, and normalizes Pickslip records, serving downstream systems with high reliability.",
    myRole: "Enterprise integration architecture and backend engineering.",
    contribution: "Architected data ingestion pipelines and guaranteed continuous 5-minute synchronization cycles.",
    impact: "Delivered guaranteed 5-minute data synchronization across enterprise applications without exposing legacy system constraints.",
    technologies: [
      "FastAPI",
      "Python",
      "MongoDB",
      "Microservices",
      "Data Pipelines"
    ],
    highlights: [
      "Synchronizes BMS & LMS enterprise sources",
      "5-minute continuous data refresh cycle",
      "Unified consumption API for downstream platforms"
    ],
    architectureDiagram: {
      sources: ["BMS", "LMS"],
      hub: "Centralized Material Service",
      target: "Consuming Applications"
    }
  },
  {
    id: "global-inventory-service",
    title: "Global Inventory Service",
    category: "Enterprise Shared Service",
    tagline: "Continuous enterprise-wide inventory synchronization",
    description: "Centralized inventory service synchronizing data across multiple enterprise systems.",
    longDescription: "A core shared service maintaining a reconciled, real-time snapshot of aviation materials and parts across regional warehouses, line stations, and partner logistics networks.",
    businessProblem: "Asynchronous inventory states across regional stations created inventory hoarding, stockouts, and duplicate procurement orders.",
    solution: "Developed an enterprise inventory service with automated delta-detection and 5-minute synchronization routines across all enterprise endpoints.",
    myRole: "Service architecture and backend engineering.",
    contribution: "Architected high-throughput synchronization routines and resilient MongoDB data storage on GCP.",
    impact: "Established unified inventory accuracy updated on a continuous 5-minute cadence across all operational stations.",
    technologies: [
      "FastAPI",
      "MongoDB",
      "GCP",
      "REST APIs"
    ],
    highlights: [
      "5-minute cross-system synchronization",
      "High-availability GCP cloud infrastructure",
      "Zero-downtime schema evolution"
    ]
  },
  {
    id: "centralized-auth-service",
    title: "Centralized Authentication Service",
    category: "Enterprise Platform",
    tagline: "Unified identity, SSO & token management across platforms",
    description: "Centralized authentication capability supporting multiple applications.",
    longDescription: "A mission-critical enterprise security platform providing federated identity management, token issuance, and role enforcement across the ADE ecosystem.",
    businessProblem: "Each digital initiative was managing siloed authentication logic, complicating user offboarding, auditing, and multi-platform single sign-on.",
    solution: "Engineered a centralized security service integrating Google OAuth, standardized JWT issuance, and granular RBAC enforcement.",
    myRole: "Architecture and security engineering.",
    contribution: "Standardized token lifecycle management and Google OAuth enterprise directory integration.",
    impact: "Accelerated development of new apps by providing out-of-the-box secure authentication while enforcing enterprise compliance.",
    technologies: [
      "Google OAuth",
      "JWT",
      "FastAPI",
      "REST APIs"
    ],
    highlights: [
      "Enterprise Google OAuth single sign-on",
      "Cryptographically secure JWT lifecycle",
      "Multi-application support and RBAC"
    ]
  },
  {
    id: "elevade",
    title: "Elevade",
    category: "Aviation MRO / Digital Records",
    tagline: "Digital transformation of aviation & aircraft record management",
    description: "MRO digital initiative supporting aviation and aircraft record management.",
    longDescription: "An advanced digital records ecosystem replacing legacy paper-based aircraft logbooks and work-order certificates with verifiable digital archives.",
    businessProblem: "Managing regulatory aviation records on paper created massive physical storage overhead, slow audit retrieval, and compliance vulnerabilities.",
    solution: "Built high-performance Node.js microservices handling ingestion, indexing, and tamper-resistant storage for aircraft maintenance documents.",
    myRole: "Led backend and platform initiatives using Node.js microservices.",
    contribution: "Engineered scalable microservice endpoints and metadata search schemas for regulatory records.",
    impact: "Transformed manual documentation processes into a searchable, compliant digital repository for aircraft maintenance history.",
    technologies: [
      "Node.js",
      "Microservices",
      "REST APIs",
      "Cloud"
    ],
    highlights: [
      "Led Node.js microservices platform",
      "Accelerated regulatory compliance retrieval",
      "Digitized critical aircraft historical records"
    ]
  }
];
