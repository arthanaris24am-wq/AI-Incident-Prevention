from agents.log_agent import analyze_logs
from agents.rootcause_agent import identify_root_cause
from agents.memory_agent import search_previous_incidents
from agents.recommendation_agent import recommend_solution
from agents.verification_agent import verify_solution
from agents.learning_agent import update_learning


def analyze_incident(incident_data):

    print("\n========== AI INCIDENT COMMANDER ==========\n")

    # Step 1
    log_analysis = analyze_logs(incident_data)

    # Step 2
    root_cause = identify_root_cause(log_analysis)

    # Step 3
    memory = search_previous_incidents(root_cause)

    # Step 4
    recommendations = recommend_solution(
        root_cause,
        memory
    )

    final_verification = None
    selected_solution = None

    # Step 5 (Verification Loop)

    for solution in recommendations:

        print("\nTrying Solution : ", solution["solution"])

        verification = verify_solution(solution)

        if verification["success"]:

            selected_solution = solution

            final_verification = verification

            print("Recovery Successful")

            break

        else:

            print("Recovery Failed")

    # Step 6

    if selected_solution:

        learning = update_learning(

            root_cause["root_cause"],

            selected_solution,

            final_verification

        )

    else:

        learning = {

            "learning": "No successful recovery."

        }

    result = {

        "incident": incident_data,

        "log_analysis": log_analysis,

        "root_cause": root_cause,

        "memory": memory,

        "recommended_solutions": recommendations,

        "selected_solution": selected_solution,

        "verification": final_verification,

        "learning": learning

    }

    return result