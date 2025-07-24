import json
from channels.generic.websocket import AsyncWebsocketConsumer, WebsocketConsumer
from asgiref.sync import async_to_sync

class ChatConsumer(WebsocketConsumer):
    def connect(self): # for initial request that comes from the client
        self.room_name = self.scope['url_route']['kwargs']['room_name'] # Get room_name from the URL
        
        async_to_sync(self.channel_layer.group_add)(
            self.room_name,
            self.channel_name  # this will be assigned automatically
        )
        self.accept() # accepting the connection request coming from the client
        # self.send(text_data=json.dumps({
        #     'type':'connection_established',
        #     'message': 'you are connected',      
        # }))

    def receive(self, text_data):
        text_data_json=  json.loads(text_data)
        message = text_data_json['message']
        print("Message:", message)

        async_to_sync(self.channel_layer.group_send)(
                self.room_name,
                {
                    'type':'chat',
                    'message': message
                }
        )
    
    def chat(self, event):
        message=event['message']
        self.send(text_data=json.dumps({
            'type':'chat',
            'message': message
        })) 