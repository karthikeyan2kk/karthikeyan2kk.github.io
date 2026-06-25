export const portfolioData = {
  name: "Karthikeyan Saravanan",
  tagline: "Data Engineer · Data Analyst · ML Practitioner",
  about:
    "I'm a graduate student in Information Technology and Management at Illinois Institute of Technology, passionate about building scalable data pipelines, machine learning models, and analytical solutions. I thrive at the intersection of big data engineering, applied AI, and backend development — turning raw data into actionable insights.",
  location: "Chicago, IL",
  email: "ksaravanan1@hawk.illinoistech.edu",
  socials: {
    github: "https://github.com/karthikeyan2kk",
    linkedin: "https://www.linkedin.com/in/karthikeyan-sarav/",
  },
  skills: {
    languages:  ["Python", "R", "Java", "SQL", "FastAPI", "RESTful API"],
    databases:  ["MySQL", "MariaDB", "PySpark", "JDBC", "MinIO", "Hadoop", "Pentaho"],
    frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "Pandas", "XGBoost", "SpaCy"],
    cloud:      ["AWS S3", "AWS Glue", "Athena", "Redshift", "CloudWatch"],
    tools:      ["Docker", "Git", "Power BI", "Tableau", "Linux", "Postman", "ServiceNow", "Excel"],
  },
  projects: [
    {
      title: "Toxic Comment Classification",
      description:
        "Fine-tuned DistilBERT on 160K Jigsaw samples with class-weighted focal loss, achieving 92% accuracy. Deployed a Gradio web app for real-time content moderation.",
      tech: ["PyTorch", "DistilBERT", "Gradio", "Python"],
      link: "https://github.com/karthikeyan2kk",
    },
    {
      title: "Big Data ETL Pipeline — NOAA Weather",
      description:
        "Architected a PySpark ETL pipeline on a multi-node Spark cluster for NOAA weather records. Reduced processing time by 25% and storage footprint by 40% via Parquet/Snappy compression.",
      tech: ["PySpark", "MinIO", "MariaDB", "Parquet", "Hadoop"],
      link: "https://github.com/karthikeyan2kk",
    },
    {
      title: "Predictive Analysis of CNC Torque",
      description:
        "Applied F-test and Welch's t-test on 10,000+ CNC sensor samples. Built a stepwise regression model (R² = 0.77) for predictive calibration scheduling and early fault detection.",
      tech: ["R", "Regression", "Hypothesis Testing", "Statistics"],
      link: "https://github.com/karthikeyan2kk",
    },
    {
      title: "CDC Health Impact ETL (FDPIR Policy)",
      description:
        "Built an R ETL pipeline merging 70+ CDC CSV files, recovering 10 years of missing data. Applied Difference-in-Differences analysis revealing a 0.3pp reduction in obesity rates.",
      tech: ["R", "ETL", "DiD Regression", "CDC Data"],
      link: "https://github.com/karthikeyan2kk",
    },
    {
      title: "Rental Management System",
      description:
        "Designed and implemented a MySQL database with 15+ tables and an ERD for a multi-role rental platform handling leases, rent payments, and payment statuses. Built role-specific access for landlords, tenants, and maintenance personnel; improved response times by 25% through normalization and query tuning.",
      tech: ["MySQL", "Java", "JDBC", "ERD", "MVC"],
      link: "https://github.com/karthikeyan2kk",
      date: "Dec 2024",
    },
    {
      title: "Automobile Service System",
      description:
        "Built a multi-role MVC application for customers and mechanics with role-specific access, booking workflows, and tailored features. Utilized JDBC for efficient CRUD operations across structured service records, reducing data modification errors by 20%.",
      tech: ["Java", "JDBC", "MySQL", "MVC", "OOP"],
      link: "https://github.com/karthikeyan2kk",
      date: "Nov 2024",
    },
    {
      title: "Steel Surface Defect Detection",
      description:
        "Fine-tuned ResNet-18 (11M params) on 12,568 Severstal Kaggle images achieving 69.9% validation accuracy across 5 imbalanced defect classes (28:1 ratio) using weighted cross-entropy loss. Deployed a real-time inspection app with Streamlit and Grad-CAM explainability at ~30ms inference latency.",
      tech: ["PyTorch", "ResNet-18", "Streamlit", "Grad-CAM", "Albumentations"],
      link: "https://github.com/karthikeyan2kk",
    },
    {
      title: "Flavor Bridge",
      description:
        "AI-powered culinary compass that maps a user's personalized flavor DNA to recommend the best global cuisine alternatives for familiar dishes. Fully conceptualized, built, and deployed in 45 minutes.",
      tech: ["Python", "AI/ML", "Streamlit", "NLP"],
      link: "https://github.com/karthikeyan2kk",
      demo: "https://taste-bridge-labs.base44.app/",
    },
    {
      title: "Chi360 — Chicago City Platform",
      description:
        "Decentralized 6-pillar platform (Markets, Skyline, Atmos, Living, Discover, Transit) capturing Chicago's pulse across transit, housing, air quality, and more. Built collaboratively in 48 hours with a scalable full-stack architecture.",
      tech: ["React", "Node.js", "Express", "Supabase"],
      link: "https://github.com/karthikeyan2kk",
      demo: "https://www.youtube.com/watch?v=EHFtcalkXnI",
    },
  ],
  experience: [
    {
      role: "Teaching & Research Assistant",
      company: "Illinois Institute of Technology",
      duration: "Aug 2025 – May 2026",
      points: [
        "Built an R ETL pipeline merging 70+ CDC CSV files; recovered 10 years of missing data (21% more samples) for a 4-county FDPIR policy health impact dataset.",
        "Applied Difference-in-Differences with multivariate regression and HC3 robust standard errors, identifying a statistically significant 0.3pp obesity rate reduction in treated counties.",
        "Supported 35+ students in Intermediate Software Development (Java) through weekly office hours on OOP design and debugging methodology.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Impactoverse",
      duration: "Oct 2025 – Dec 2025",
      points: [
        "Delivered a Power BI dashboard suite with DAX-computed KPIs validated against MySQL source tables; surfaced that gamified modules drove 20% higher quiz participation.",
        "Developed a Python data quality validation framework using NumPy and pandas performing null checks, duplicate detection, and schema conformance for reliable reporting.",
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Apar Innosys",
      duration: "Jun 2023 – Sep 2023",
      points: [
        "Engineered IBM DataStage ETL workflows with multi-stage parallel jobs loading 1M+ records into a centralized data warehouse, reducing pipeline processing time by 30%.",
        "Optimized RESTful API endpoints by rewriting high-latency SQL joins as indexed subqueries, reducing average API response time by 18% across Agile sprints.",
      ],
    },
    {
      role: "Project Engineer Intern",
      company: "Wipro",
      duration: "Mar 2022 – May 2022",
      points: [
        "Gained hands-on experience in .NET development (C# and ASP.NET) through code debugging and legacy refactoring; implemented a secure login system with role-based authentication, reducing unauthorized access attempts by 95%.",
        "Developed a full-featured bank website with user registration, account management, and transaction processing modules, achieving a 40% improvement in user experience.",
      ],
    },
  ],
  achievements: [
    { icon: "award",    title: "Best Student Award",    description: "Recipient of the Best Student Award for Teaching and Mentoring at Illinois Institute of Technology." },
    { icon: "barChart", title: "Research Publication",  description: "Conducted applied research on FDPIR policy health impact using Difference-in-Differences causal inference methods." },
    { icon: "target",   title: "92% Model Accuracy",    description: "Achieved 92% accuracy on a severely imbalanced multi-label toxic comment classification task using fine-tuned DistilBERT." },
    { icon: "zap",      title: "30% Pipeline Speedup",  description: "Reduced IBM DataStage ETL pipeline processing time by 30% through multi-stage parallel job optimization." },
  ],
  education: [
    { degree: "Master's in Information Technology and Management", institution: "Illinois Institute of Technology",                year: "Aug 2024 – May 2026" },
    { degree: "Bachelor of Engineering, Mechanical Engineering",   institution: "Loyola-ICAM College of Engineering and Technology", year: "Jul 2018 – Aug 2022" },
  ],
};
