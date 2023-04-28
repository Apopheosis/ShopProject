from fastapi import APIRouter, Depends
from schemas import item, user
from utils import items_utils
from utils.dependencies import get_current_user
from typing import List

router = APIRouter()

@router.post('/get-items-by-id/', response_model=List[item.ItemThumbnail])
async def get_items_by_ids(id_list: item.ItemIdsList):
    print(id_list)
    return await items_utils.get_items_by_ids(id_list.ids)

@router.get('/products/{id}', response_model=item.ItemDetailsModel)
async def get_item_by_id(id: int):
    return await items_utils.get_item_by_id(id)


@router.get('/items/{category}/{subcategory}', response_model=List[item.ItemThumbnail])
async def get_items_by_category_subcategory(category: str, subcategory: str, page: int=1):
    items = await items_utils.get_items_by_category_subcategory(category, subcategory, page)
    return items

@router.get('/items/{category}', response_model=List[item.ItemThumbnail])
async def get_items_by_category(category: str, page: int=1):
    items = await items_utils.get_items_by_category(category, page)
    return items




@router.post('/items/', response_model=item.PostItemModel, status_code=201)
async def post_item(item: item.PostItemModel, current_user: user.User = Depends(get_current_user)):
    item = await items_utils.post_item(item)
    return item

@router.post('/post-multiple-items/', response_model=item.Items, status_code=201)
async def post_items(items: List[item.PostItemModel], current_user: user.User = Depends(get_current_user)):
    items = await items_utils.post_items(items)
    return items