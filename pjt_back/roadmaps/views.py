from .models import Node, Track, Completion, Role
from .serializer import TrackSerializer, NodeDetailSerializer, CompletionSerializer

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def get_track(request, track_id):
    track = Track.objects.get(id=track_id)
    serializer = TrackSerializer(track)
    return Response(serializer.data)


@api_view(['GET'])
def get_node(request, node_id):
    node = Node.objects.get(id=node_id)
    serializer = NodeDetailSerializer(node)
    return Response(serializer.data)


@api_view(['POST'])
def clear_node(request, node_id):
    node = Node.objects.get(id=node_id)
    user = request.user
    
    if Completion.objects.filter(node=node).filter(user=user):
        print('ues')
    else:
        print('no')
        serializer = CompletionSerializer(data={'node: node'})
        if serializer.is_valid():
            serializer.save(user=user)
        else:
            print(serializer.errors)
    return Response()


@api_view(['GET'])
def get_roles(request):
    roles = Role.objects.all()
    serializer = RoleSerializer(roles, many=True)
    return Response(serializer.data)