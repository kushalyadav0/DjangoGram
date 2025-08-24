import json
from channels.generic.websocket import AsyncWebsocketConsumer, WebsocketConsumer
from asgiref.sync import async_to_sync

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self): # for initial request that comes from the client
        user = self.scope["user"] # an instance of Django's User model
        self.room_name = self.scope['url_route']['kwargs']['room_name'] # Get room_name from the URL
        # if user.is_authenticated:
        username = user.username
        print(f"User {username} connected.")
                # self.accept()
        # else:
        #     print("Anonymous user attempted to connect.")
        #     self.close()
            
        await (self.channel_layer.group_add)(
            self.room_name,
            self.channel_name  # this will be assigned automatically
        )
        await self.accept() # accepting the connection request coming from the client
        # self.send(text_data=json.dumps({
        #     'type':'connection_established',
        #     'message': 'you are connected',      
        # }))

    async def receive(self, text_data):
        text_data_json=  json.loads(text_data)
        user= self.scope["user"]
        username = user.username
        message = text_data_json['message']
        print("Message:", message, "sender:", username)

        await (self.channel_layer.group_send)(
                self.room_name,
                {
                    'type':'chat_message',
                    'message': message,
                    'sender': username
                }
        )
    
    async def chat_message(self, event):
        print("📡 Sending to frontend:", event)  # Debug log
        message = event['message']
        sender = event['sender']

        # user= self.scope["user"]
        # username = user.username
        await self.send(text_data=json.dumps({
            'type':'chat_message',
            'message': message,
            'sender': sender

        })) 