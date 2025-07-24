from django.urls import re_path
from . import consumers

websocket_urlpatterns   = [
    re_path(r'ws/socket-server/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()), # capture a named group called room_name containing word characters ([a-zA-Z0-9_]). `w+` means one or more alphabatic or numeric characters and underscore
]