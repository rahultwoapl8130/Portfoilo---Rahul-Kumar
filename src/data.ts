export const portfolioData = {
  hero: {
    name: "Rahul Kumar",
    headline: "Data Scientist | Machine Learning Engineer | AI Engineer",
    description: "I specialize in harnessing the power of Artificial Intelligence and Data Science to solve complex, real-world business challenges. Passionate about transforming raw data into actionable insights.",
    socials: {
      github: "https://github.com/rahultwoapl8130",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-54258a344/", 
    },
  },
  
  about: "I am an aspiring Data Scientist, Machine Learning Engineer, and Business Analytics professional passionate about building AI-driven solutions that solve real-world business problems. My work spans machine learning, customer analytics, business intelligence, recommendation systems, and interactive web applications. I enjoy transforming raw data into actionable insights and creating end-to-end projects—from data preprocessing and model development to deployment and intuitive user interfaces. I am deeply interested in Cloud Computing, Product Thinking, and Team Collaboration, and I am committed to continuous learning.",
  
  skills: [
    { name: "Python", percentage: 90, category: "Programming" },
    { name: "SQL", percentage: 85, category: "Programming" },
    { name: "JavaScript", percentage: 75, category: "Programming" },
    { name: "C++", percentage: 65, category: "Programming" },
    { name: "Machine Learning", percentage: 88, category: "AI & ML" },
    { name: "Scikit-learn", percentage: 85, category: "AI & ML" },
    { name: "TensorFlow", percentage: 75, category: "AI & ML" },
    { name: "PyTorch", percentage: 70, category: "AI & ML" },
    { name: "Pandas", percentage: 90, category: "Data Science" },
    { name: "NumPy", percentage: 88, category: "Data Science" },
    { name: "Power BI", percentage: 85, category: "Data Science" },
    { name: "Google Cloud", percentage: 80, category: "Cloud & DB" },
    { name: "Snowflake", percentage: 75, category: "Cloud & DB" },
  ],
  
  experience: [
    {
      date: "2023 - Present",
      role: "MBA Business Analytics",
      company: "Uttaranchal University",
      description: "Focusing on leveraging business intelligence, statistical modeling, and data analytics to drive strategic decision-making and operational efficiency in modern enterprises."
    },
    {
      date: "Previous",
      role: "B.Sc. Agriculture",
      company: "Undergraduate Degree",
      description: "Developed a strong foundation in scientific methodology, quantitative analysis, and research, applying data-driven approaches to agricultural problem-solving."
    }
  ],

  services: [
    {
      title: "Machine Learning & AI",
      description: "Developing predictive models, natural language processing solutions, and intelligent automation systems to solve complex business problems.",
      icon: "BrainCircuit"
    },
    {
      title: "Data Science & Analytics",
      description: "Transforming raw data into actionable insights through advanced statistical analysis, data visualization, and interactive dashboards.",
      icon: "LineChart"
    },
    {
      title: "Business Intelligence",
      description: "Designing end-to-end BI pipelines using Power BI, Snowflake, and SQL to empower executives with real-time decision-making capabilities.",
      icon: "PieChart"
    }
  ],

  certifications: [
    { title: "Microsoft Generative AI", issuer: "Microsoft" },
    { title: "Power BI Data Analyst", issuer: "Microsoft" },
    { title: "Machine Learning Specialization", issuer: "Coursera / Stanford" },
    { title: "Google Cloud Fundamentals", issuer: "Google" },
    { title: "Snowflake SnowPro Core", issuer: "Snowflake" },
  ],
  
  projects: [
    {
      title: "Shooper Spectrum",
      description: "An end-to-end AI-powered e-commerce analytics platform that combines customer segmentation, recommendation intelligence, and interactive business dashboards to help retailers make data-driven decisions.",
      businessProblem: "E-commerce platforms struggle with low conversion rates due to poor understanding of customer purchasing patterns and generic product recommendations.",
      architecture: "Python Backend -> Scikit-learn ML Pipelines -> Render Deployment -> Custom HTML/JS Frontend.",
      businessImpact: "Enables organizations to make data-driven decisions through customer segmentation, leading to highly targeted marketing and optimized inventory.",
      challenges: "Handling sparse purchase data and scaling the recommendation inference algorithm.",
      link: "https://shooper-spectrum.onrender.com/",
      github: "https://github.com/rahultwoapl8130/Shooper_Spectrum",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "HTML", "CSS", "JavaScript", "Render"]
    },
    {
      title: "SmartCart",
      description: "An AI-powered customer segmentation and personalized product recommendation system built using unsupervised machine learning, enabling targeted marketing strategies for e-commerce businesses.",
      businessProblem: "Inefficient marketing spend due to applying uniform marketing strategies to a diverse customer base of 2,240 records.",
      architecture: "Data Preprocessing (StandardScaler, PCA) -> Unsupervised ML Models (K-Means, Agglomerative) -> Client-side Recommendation Engine via GitHub Pages.",
      businessImpact: "Identified 4 distinct customer segments, generating actionable insights for personalized marketing, improved customer retention, and dynamic inventory planning.",
      challenges: "Determining the optimal number of clusters for diverse user behavioral data.",
      link: "https://rahultwoapl8130.github.io/Smartcart_Customers/",
      github: "https://github.com/rahultwoapl8130/Smartcart_Customers",
      tags: ["Python", "Scikit-learn", "PCA", "K-Means", "Pandas", "NumPy", "HTML"],
      image: "https://images.unsplash.com/photo-1556742049-0cf34b6e5804?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Adventure Works Dashboard",
      description: "An interactive Power BI Business Intelligence dashboard for analyzing sales, customer trends, and regional performance using advanced DAX and Power Query.",
      businessProblem: "Executive teams lacked visibility into regional sales performance and customer trends, delaying strategic business decisions.",
      architecture: "Raw SQL Data -> Power Query ETL -> Power BI Data Model -> DAX Measures -> Interactive Executive Dashboards.",
      businessImpact: "Provided instant visibility into Business KPIs, enabling executives to identify key influencers and optimize regional sales strategies.",
      challenges: "Creating complex DAX measures for year-over-year growth and dynamic regional filtering.",
      link: "#",
      github: "#",
      tags: ["Power BI", "Power Query", "DAX", "Business KPIs", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    }
  ]
};
