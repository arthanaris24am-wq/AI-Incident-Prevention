from flask import Blueprint,request,jsonify
from agents.coordinator_agent import analyze_incident
analyze_bp = Blueprint("analyze",__name__)
@analyze_bp.route("/",methods = ["POST"])
def analyze():
    try :
        data = request.get_json()
        if not data:
            return jsonify({
                "success" : False,
                "message" : "No incident data received."
            }),400
        result = analyze_incident(data)
        return jsonify({
            "sucess" : True,
            "result" : result
        }),200
    except Exception as error:
        return jsonify({
            "success" : False,
            "error" : str(error)
        }),500