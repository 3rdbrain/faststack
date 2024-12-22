from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class CustomerDetails(BaseModel):
    name: str
    email: EmailStr
    action_time: int = Field(default_factory=lambda: int(datetime.timestamp(datetime.now())))
