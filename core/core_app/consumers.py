from email import message
import json

from channels.generic.websocket import WebsocketConsumer
class ChatConsumer(WebsocketConsumer):
    async def connect(self)
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f'chat_{self.room_name}'

        # joining room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.room_name
        )
        
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        self.send(text_data=json.dumps({'message':message}))