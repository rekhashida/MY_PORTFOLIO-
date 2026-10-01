export const GH = "https://github.com/rekhashida";
export const LINKS = {
  email: "mailto:rekhashida5@gmail.com",
  github: GH,
  linkedin: "https://www.linkedin.com/in/rekha-sida-rs576/",
  kaggle: "https://www.kaggle.com/rekhashida",
  leetcode: "https://leetcode.com/u/rekha_shida/",
};

export const SKILL_TABS = {
  Programming: [
    ["Python", "Cleaning, analysis and automation for every data project."],
    ["SQL", "Joins, aggregations and window functions for business questions."],
    ["C", "Programming fundamentals and problem solving."],
    ["C++ (Basic)", "Data structures, algorithms and object-oriented programming."],
  ],
  "Data analysis": [
    ["pandas", "Cleaning, grouping and reshaping real-world datasets."],
    ["NumPy", "Fast numerical computing behind the analysis."],
    ["EDA", "Finding patterns, outliers and data quality issues before modeling."],
    ["Statistics", "Hypothesis tests, confidence intervals and A/B testing."],
    ["Excel", "Pivot tables and lookups for quick analysis."],
  ],
  "Machine learning": [
    ["scikit-learn", "Classification pipelines, scaling and model evaluation."],
    ["TensorFlow", "Image models for crop disease detection."],
  ],
  Visualization: [
    ["Power BI", "Interactive dashboards with slicers and KPI cards."],
    ["Matplotlib", "Custom charts that carry a written insight."],
    ["Seaborn", "Statistical plots, heatmaps and distributions."],
    ["Plotly", "Interactive charts for exploration."],
  ],
  "Tools and deployment": [
    ["Jupyter Notebook", "Local notebooks for analysis and documentation."],
    ["Google Colab", "Cloud notebooks for modeling without setup."],
    ["Kaggle", "Real datasets, practice and public notebooks."],
    ["Streamlit", "Turning trained models into live apps."],
    ["Vercel", "Hosting full-stack apps such as ExpenseAI."],
    ["Netlify", "Hosting web apps such as KrishiMitra+."],
    ["Git and GitHub", "Version control and project documentation."],
  ],
  "Web development": [
    ["React", "Component-based interfaces and dashboards."],
    ["Node.js and Express", "APIs behind AI-powered apps."],
    ["Supabase", "Auth and database for full-stack projects."],
  ],
};

export const TICKER = ["Python", "C", "C++", "SQL", "pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "scikit-learn", "Streamlit", "Jupyter", "Google Colab", "Kaggle", "Vercel", "Netlify", "React", "Git"];

export const FILTERS = [["all", "All"], ["data", "Data analysis"], ["ml", "Machine learning"], ["web", "Full-stack AI"]];

export const PROJECTS = [
  { title: "Customer churn prediction", cat: "ml", featured: true, hl: "79.84% accuracy, live app", note: "ML and deployment", desc: "Predicts which telecom customers will leave. Logistic regression reached 79.84% accuracy and 0.84 ROC-AUC on 7,043 customers.",
    tags: ["Python", "scikit-learn", "XGBoost", "Streamlit"], repo: GH + "/customer-churn-prediction", live: "https://customer-churn-prediction-6rdyeqfxx72juchqmupe6x.streamlit.app/" },
  { title: "E-commerce sales analysis", cat: "data", featured: true, hl: "$100K+ losses found", note: "Business analysis", desc: "Finds where a superstore loses money across 9,994 orders. Binders, tables and machines lose over $100K, and discounts above 30% hurt profit.",
    tags: ["Python", "SQL", "Power BI"], repo: GH + "/ecommerce-sales-analysis" },
  { title: "A/B testing analysis", cat: "data", note: "Statistics", desc: "Tests a new landing page on 76,587 cleaned users. Chi-square p-value of 0.7055 showed no real lift, so the page should not launch.",
    tags: ["Python", "SciPy", "StatsModels"], repo: GH + "/ab-testing-analysis" },
  { title: "COVID-19 India analysis", cat: "data", note: "EDA and dashboard", desc: "State-wise cases, deaths and recovery for 36 states and union territories, with a Power BI dashboard and 10 SQL queries.",
    tags: ["Python", "Plotly", "Power BI", "SQL"], repo: GH + "/covid19-india-eda" },
  { title: "HR attrition analysis", cat: "ml", note: "EDA and ML", desc: "Explores which employees leave by department, age and role, and predicts attrition risk.",
    tags: ["Python", "scikit-learn", "Power BI"], repo: GH },
  { title: "KrishiMitra+", cat: "web", featured: true, hl: "98% validation accuracy", note: "Samsung Solve for Tomorrow", desc: "Crop disease detection (EfficientNetV2S, about 98% validation accuracy) plus a farmer and worker labour marketplace.",
    tags: ["React", "TensorFlow", "Supabase", "Hugging Face"], repo: GH + "/krishimitra-plus", live: "https://krishimitra-plus.netlify.app",
    more: [["Model API", "https://huggingface.co/spaces/rekhashida/krishimitra-disease-api"]] },
  { title: "ExpenseAI", cat: "web", hl: "AI finance advisor", note: "Personal finance", desc: "Finance app for Indian users with UPI tracking, spending prediction and an AI advisor built on the Claude API.",
    tags: ["React", "Node.js", "Claude API"], repo: GH + "/expense-ai", live: "https://expense-ai-opal.vercel.app/" },
  { title: "WhosMyMate", cat: "web", featured: true, note: "Roommate matching", desc: "Matches students as roommates with weighted compatibility scores, AI match explanations, messaging and reviews.",
    tags: ["TypeScript", "Supabase", "Claude API"], repo: GH + "/WhosMyMate", live: "https://zip-unzip-unravel.lovable.app/" },
  { title: "Tripzy", cat: "web", featured: true, note: "Major project", desc: "Ride-hailing app extended with an AI chatbot, fare prediction and driver anomaly detection.",
    tags: ["React", "Node.js", "ML"], repo: GH + "/Tripzy", live: "https://tripzy-delta.vercel.app/" },
  { title: "Demographic data analyzer", cat: "data", note: "freeCodeCamp", desc: "Analyzes census data with pandas to answer questions about age, education, work hours and income.",
    tags: ["pandas", "Python"], repo: GH + "/demographic-data-analyzer" },
  { title: "Medical data visualizer", cat: "data", note: "freeCodeCamp", desc: "Visualizes medical examination data with categorical plots and a correlation heatmap.",
    tags: ["pandas", "Seaborn", "Matplotlib"], repo: GH + "/medical-data-visualizer" },
  { title: "Page view time series visualizer", cat: "data", note: "freeCodeCamp", desc: "Line, bar and box plots that reveal yearly and monthly patterns in forum page views.",
    tags: ["pandas", "Matplotlib", "Seaborn"], repo: GH + "/page-view-time-series-visualizer" },
  { title: "Sea level predictor", cat: "data", note: "freeCodeCamp", desc: "Linear regression on historical sea level data to predict the level in 2050.",
    tags: ["SciPy", "Matplotlib"], repo: GH + "/sea-level-predictor" },
  { title: "Portfolio website", cat: "web", note: "This site", desc: "The React portfolio you are looking at, with a project filter, skills tabs and an interactive terminal.",
    tags: ["React", "Vite", "CSS"], repo: GH + "/MY_PORTFOLIO" },
];

export const EXPERIENCE = [
  { role: "Data Analytics Job Simulation", org: "Deloitte Australia, via Forage", text: "Worked through analysis, dashboard and client-communication tasks on a simulated consulting engagement." },
  { role: "GenAI-powered Data Analytics Simulation", org: "Tata, via Forage", text: "Practiced turning business questions into data analysis and clear recommendations." },
];

export const EDUCATION = [
  { title: "B.Tech, Computer Engineering", org: "Parul University, Vadodara", when: "2023 to 2027", text: "CGPA 7.90. Focus on data analysis, machine learning and AI applications." },
];

export const CERTS = [
  { title: "Data Analysis with Python", org: "freeCodeCamp", year: "2026" },
  { title: "Data Analytics Essentials", org: "Cisco", year: "2026" },
  { title: "Introduction to Data Science", org: "Cisco", year: "2025" },
  { title: "AI Fundamentals", org: "IBM SkillsBuild", year: "2025" },
  { title: "Career Edge Young Professional", org: "TCS iON", year: "2026" },
];
