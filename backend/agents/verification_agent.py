import random
def verify_solution(solution):
    probability = solution["probability"]

    random_number = random.randint(1,100)

    if random_number <= probability:
        status = "Healthy"
        success : True
    else:
        status = "Failed"
        success : False
    result = {
        "solution" : solution["solution"],
        "probability" : probability,
        "random-score" : random_number,
        "status" : status,
        "success" : success
    }

    return result