def recommend_solution(root_cause,memory):
    cause = root_cause["root_cause"]
    recommendations = []

    if cause == "CPU Overload":
        recommendations = [
        {
            "solution" : "Restart High CPU Process",
            "probabilty" : 96
        },

        {
            "solution" : "Scale Appilaction Server",
            "probability" : 88
        },

        {
            "solution" : "Restart Entire Server",
            "probabilty" : 75
        }
    ]
    
    elif cause == "Memory Leak":
        recommendations = [
            {
                "solution" : "Restart Application",
                "probability" : 97
            },

            {
                "solution" : "Clear Memory Cache",
                "probability" : 91
            },

            {
                "solution" : "Restart Server",
                "probability" : 82
            }
        ]

    elif cause == "Database Failure":
        recommendations = [
            {
                "solution" : "Restart Database Service",
                "probability" : 98
            },

            {
                "solution" : "Restart Nginx",
                "probablity" : 83
            },

            {
                "solution" : "Increase Database Connection Pool",
                "probability" : 87
            },

            {
                "solution" : "Scale Database Cluster",
                "probability" : 76
            }
        ]

    elif cause == "Disk Full":
        recommendations = [
            {
                "solution" : "Delete Temporary Files",
                "probabilty" : 98
            },

            {
                "solution" : "Clean Old Logs",
                "probability" : 95
            },

            {
                "solution" : "Extend Disk Storage",
                "probability" : 80
            }
        ]
    else:
        recommendations = [
            {
                "solution" : "Manual Investigation Required",
                "probability" : 50
            }
        ]
    
    if memory["found"]:
        previous = memory["previous_solution"]

        for i in recommendations:
            if i["solution"] == previous:
                i["probability"] += 2
    recommendations.sort(
        key = lambda x : x["probability"],reverse = True
    )

    return recommendations