def identify_root_cause(log_analysis):
    cpu = log_analysis["cpu_status"]
    memory = log_analysis["memory_status"]
    disk = log_analysis["disk_status"]
    errors = log_analysis["errors"]

    root_cause = "unknown"

    confidence = 50

    reasoning = []

    if cpu == "Critical":
        reasoning.append("CPU usage exceeded 90%.")
        root_cause = "CPU Overload"
        confidence = 90
    if memory == "Critical":
        reasoning.append("Memory utilization exceeded 90%.")
        root_cause = "Memory Leak"
        confidence = 92
    
    if disk == "Critical":
        reasoning.append("Disk utilization exceeded 90% .")
        root_cause = "Disk Full"
        confidence = 88
    
    if "database" in errors:
        reasoning.append("Database related errors detected")
        root_cause = "Database Failure"
        confidence = 80
    
    if "timeout" in errors:
        reasoning.append("Multiple timeout errors detected")
    
    if "api" in errors:
        reasoning.append("API communication failed")

    if "docker" in errors:
        reasoning.append("Docker container failure detected")

    if "nginx" in errors:
        reasoning.append("Nginx service stopped responding")

    result = {
        "root_cause" : root_cause,
        "confidence" : confidence,
        "reasoning" : reasoning
    }

    return result