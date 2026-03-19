from pydantic import BaseModel
from typing import Optional

class Location(Basemodel):
    id Optional[int] = None
    name: str
    path: str
    type: str = "local"

    
    