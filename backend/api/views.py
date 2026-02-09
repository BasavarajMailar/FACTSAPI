from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def facts_api(request):
    data = [
        {"id": 1, "fact": "The sun is a star."},
        {"id": 2, "fact": "Water boils at 100°C."},
        {"id": 3, "fact": "Earth has one moon."}
    ]
    return Response(data)
