import { gql } from 'apollo-server-micro'


export const typeDefs = gql`
    type Hero{
        title:String
        description:String
        imageURL:String
    }
    type About{
        title:String
        description:String
        imageURL:String
    }
    type Experience{
        title:String
        company:String
        location:String
        companyWebsite:String
        startingDate:String
        endingDate:String
        duties:[String]
    }
    type Skills{
        title:String
        skills:[Skill]
    }
    type Skill {
        name:String
        iconURL:String
    }
    type Project {
        title:String
        subtitle:String
        imageURL:String
        githubLink:String
        externalLink:String
        description:String
        technologies:[Technology]
    }
    type Technology {
        technology:String
        technologyIconURL:String
    }
    type Social {
        imageURL: String
        label: String
        linkURL: String
    }

    type Query {
        hero:Hero
        about:About
        experiences:[Experience]
        skills:Skills
        projects:[Project]
        socials:[Social]

    }
`;

