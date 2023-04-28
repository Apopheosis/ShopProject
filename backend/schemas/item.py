from datetime import date
from typing import List, Optional

from pydantic import BaseModel

class ItemDetailsModel(BaseModel):
    id: Optional[int]
    item_name: str
    price: int
    mass: int
    description: str
    category: str
    subcategory: str
    harvest_date: Optional[str]
    compound: Optional[str]
    package: Optional[str]
    tips: Optional[str]
    size: Optional[str]
    manufacturer: Optional[str]
    img_url: Optional[List[str]]

class ItemThumbnail(BaseModel):
    id: int
    item_name: str
    price: int
    img_url: str

class PostItemModel(BaseModel):
    id: int
    item_name: str
    price: int
    mass: int
    description: str
    category: str
    subcategory: str
    harvest_date: Optional[str]
    compound: Optional[str]
    package: Optional[str]
    tips: Optional[str]
    size: Optional[str]
    manufacturer: Optional[str]
    img_url: List[Optional[str]]

class Items(BaseModel):
    Items: List[ItemDetailsModel]

class ItemIdsList(BaseModel):
    ids: List[int]

