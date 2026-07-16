import json
import os
MEMORY_FILE = "data/incidents/incident_memory.json"

def search_previous_incidents(root_cause):
    if not os.path.exists(MEMORY_FILE):
        return{
            "found" : False,
            "message" : "No previous incidents found"
        }
    with open(MEMORY_FILE,"r") as file:
        incidents = json.load(file)
    
    current_root = root_cause["root_cause"]

    for i in incidents:
        if i[root_cause] == "current_root":
            return{
                "found" : True,
                "previous_solution" : i["solution"],
                "success_rate" : i["success_rate"],
                "last_occurance" : i["date"]

            }
    return{
        "found" : False,
        "message" : "No matching incident found"
    }
def save_incident(root_cause,solution,success):
    i = {
        "root_cause" : root_cause,
        "success_rate" : success,
        "solution" : solution,
        "date" : "2026-07-16"
    }

    incidents = []
    if os.pat.exists(MEMORY_FILE):
        with open(MEMORY_FILE,"r") as file:
            incidents = json.load(file)
    incidents.append(i)

    with open(MEMORY_FILE,"r") as file:
        json.dump(
            incidents,file,i = 4
        )