import re
def analyze_logs(incident):
    analysis = {
        "cpu_status" : "Normal",
        "memory_status" : "Normal",
        "disk_status" : "Normal",
        "errors" : [],
        "severity" : "Low"
    }

    cpu = incident.get("cpu",0)

    memory = incident.get("memory",0)

    disk = incident.get("disk",0)

    log = incident.get("log",0)

    if cpu >= 90:
        analysis["cpu_status"] = "Critical"
    elif cpu >= 75:
        analysis["cpu_status"] = "High"
    else:
        analysis["cpu_status"] = "Good"

    if memory >= 90:
        analysis["memory_status"] = "Critical"
    elif memory >= 75:
        analysis["memory_status"] = "High"

    if disk >= 90 :
        analysis["disk_status"] = "Critical"
    elif disk >= 75 :
        analysis["disk_status"] = "High"
    
    patterns = [
        "timeout",
        "overflow",
        "disk_full",
        "database",
        "connection_refused",
        "cpu",
        "memory",
        "linux",
        "docker",
        "api"
    ]

    for p in patterns:
        if re.search(p,log.viewer()):
            analysis["errors"].append(p)
    if analysis["cpu_status"] == "Critical" or analysis["memory_status"] == "Critical":
        analysis["severity"] = "Critical"
    elif analysis["cpu_status"] == "High" or analysis["memory_status"] == "High":
        analysis["severity"] = "High"
    return analysis