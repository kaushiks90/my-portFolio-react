import {
    GET_SKILLS
} from '../actions/types';
const initialState = {

    skills: [{
            "name": "Microsoft Technologies",
            "values": ["C#", "MVC", "Web Api", ".NetCore", "Entity Framework"]
        },
        {
            "name": "Javascript",
            "values": ["Node js", "React js", "Jquery"]
        },
        {
            "name": "Database",
            "values": ["SQL Server", "Oracle", "MongoDb", "Postgress"]
        },
        {
            "name": "Cloud",
            "values": ["AWS"]
        },
        {
            "name": "Devops",
            "values": ["Docker", "CI/CD"]
        },
        {
            "name": "SourceControl",
            "values": ["VSTS", "GIT", "TFS", "SVN"]
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SKILLS:
            return {
                ...state
            }
            default:
                return state;
    }
}