from django.shortcuts import render

# Create your views here.
def lobby(request):
    return render(request, 'chat/lobby.html')

def chat(request, room_name):
    return render(request, 'chat/chat.html', {'room_name': room_name})