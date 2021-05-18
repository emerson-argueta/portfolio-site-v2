import { IResolvers } from 'graphql-tools';


export const resolvers: IResolvers = {
    Query: {
        hero: async (_root, _args, _context, _info) => {
            return {
                title: "Hello there, I'm Emerson Argueta.",
                description: "I enjoy building web apps and sites as much as eating a good plate of food.",
                imageURL: "logo.png",
            }
        },
        about: async (_root, _args, _context, _info) => {
            return {
                title: "About Me",
                description: "My journey in tech began by wrangling data for big data systems. A couples months later I became addicted to web development. <br/>\
                <br/>\
                My goal is to become a clean coder and code craftsman, write maintainable software, and help whomever I can in the process.<br/>",
                imageURL: "me.png",
            }
        },
        experiences: async (_root, _args, _context, _info) => {
            return [
                {
                    title: "Consultant",
                    company: "Infosys",
                    location: "Irwindale, California",
                    companyWebsite: "https://www.infosys.com",
                    startingDate: "Feb,2019",
                    endingDate: "Feb,2021",
                    duties: [
                        "Developed ETL scripts to manage data for client projects",
                        "Collaborated with client and consultant teams to migrate data from a legacy mainframe system.",
                        "Worked on developing views for business analytic reports",
                    ],
                },
                {
                    title: "Researcher",
                    company: "CSU Bakersfield",
                    location: "Bakersfield, California",
                    companyWebsite: "https://www.csub.edu/",
                    startingDate: "Aug,2016",
                    endingDate: "Aug,2018",
                    duties: [
                        "Researched IOT systems for agriculture",
                        "Developed software for IOT systems",
                        "Lead a team to develop online courses",
                    ],
                }
            ]
        },
        skills: async (_root, _args, _context, _info) => {
            return {
                title: "Some of the tools I use",
                skills: [
                    {
                        name: "React",
                        iconURL: "react.png"
                    },
                    {
                        name: "Redux",
                        iconURL: "redux.png"
                    },
                    {
                        name: "Node.js",
                        iconURL: "node.png"
                    },
                    {
                        name: "Go",
                        iconURL: "go.png"
                    },
                    {
                        name: "Typescript",
                        iconURL: "typescript.png"
                    },
                    {
                        name: "PostgreSQL",
                        iconURL: "postgresql.png"
                    }
                ]
            }
        },
        projects: async (_root, _args, _context, _info) => {
            return [
                {
                    title: "Trustdonations.org",
                    subtitle: "Donation tracking Tool",
                    imageURL: "trustdonations.gif",
                    githubLink: "",
                    externalLink: "https://www.trustdonations.org/",
                    description: "Donation tracking Tool",
                    technologies: [
                        {
                            technology: "React",
                            technologyIconURL: "react.png",
                        },
                        {
                            technology: "Go",
                            technologyIconURL: "go.png",
                        },
                        {
                            technology: "PostgreSQL",
                            technologyIconURL: "postgresql.png",
                        }
                    ]
                },
                {
                    title: "Community Goal Tracker",
                    subtitle: "Social Web App",
                    imageURL: "cgt.png",
                    githubLink: "https://github.com/emerson-argueta/postgres-react-golang-template",
                    externalLink: "hello world",
                    description: "A web application to create, share and track goals.  The application uses:\n \
                    * React with hooks API in the frontend\n  \
                    * Golang with the Labstack echo router and JWT authentication in the backend\n  \
                    *  PostgreSQL database\n \
                    The project was developed following the principles of domain-driven design.\n",
                    technologies: [
                        {
                            technology: "React",
                            technologyIconURL: "react.png",
                        },
                        {
                            technology: "Go",
                            technologyIconURL: "go.png",
                        },
                        {
                            technology: "PostgreSQL",
                            technologyIconURL: "postgresql.png",
                        }
                    ]
                },
                {
                    title: "Referral Tracking",
                    subtitle: "Productivity Web App",
                    imageURL: "referraltracking.gif",
                    githubLink: "https://github.com/emerson-argueta/referral-tracking",
                    externalLink: "referraltracking.gif",
                    description: "A web application to track referrals for sales reps. The application uses:\n \
                    * React with hooks API in the frontend\n \
                    * Node.js with the express router in the backend\n  \
                    *  PostgreSQL database\n \
                    The project was developed following the principles of domain-driven design.\n",
                    technologies: [
                        {
                            technology: "React",
                            technologyIconURL: "react.png",
                        },
                        {
                            technology: "Node.js",
                            technologyIconURL: "node.png",
                        },
                        {
                            technology: "PostgreSQL",
                            technologyIconURL: "postgresql.png",
                        }
                    ]
                },
            ]
        },
        socials: async (_root, _args, _context, _info) => {
            return [
                {
                    imageURL: "github.svg",
                    label: "github",
                    linkURL: "https://github.com/emerson-argueta",
                },
                {
                    imageURL: "twitter.svg",
                    label: "twitter",
                    linkURL: "https://twitter.com/emerson_fswd",
                },
                {
                    imageURL: "linkedin.svg",
                    label: "Linkedin",
                    linkURL: "https://www.linkedin.com/in/emerson-argueta",
                },
            ]
        },
    }
};
