from agents.memory_agent import save_incident

def update_learning(root_cause,solution,verification):
    if verification["success"]:
        success_rate = solution["probability"]

    else:
        success_rate = max(solution["probability"]-25,10)
    save_incident(
        root_cause = root_cause,
        solution = solution["solution"],
        success = success_rate
    )

    return {
        "learning" : "updated",
        "success_rate" : success_rate
    }