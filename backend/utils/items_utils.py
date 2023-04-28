from models.Item import items_table, images_table
from sqlalchemy import and_, select
from models.database import database
from schemas import item as item_schema
from typing import List
from fastapi.logger import logger

async def get_item_by_id(id: int):
    print('hello')
    query = (
        select(
            items_table.c.id,
            items_table.c.item_name,
            items_table.c.price,
            items_table.c.mass,
            items_table.c.description,
            items_table.c.category,
            items_table.c.subcategory,
            items_table.c.harvest_date,
            items_table.c.compound,
            items_table.c.package,
            items_table.c.tips,
            items_table.c.size,
            items_table.c.manufacturer
        ).select_from(items_table).where(items_table.c.id == id)
    )
    item = await database.fetch_one(query)
    item = dict(zip(item, item.values()))
    print(item)
    query = (
        select(
            images_table.c.img_url
        ).select_from(images_table).where(images_table.c.item_id == id)
    )
    images = await database.fetch_all(query)
    images_list = []
    for image in images:
        images_list.append(dict(zip(image, image.values())))
    print(images_list)
    item['img_url'] = [x['img_url'] for x in images_list]
    return item
async def get_items_by_category_subcategory(category: str, subcategory: str, page: int):
    max_per_page = 20
    offset1 = (page - 1) * max_per_page
    query = (
        select(
            [
                items_table.c.id,
                items_table.c.item_name,
                items_table.c.price,
                items_table.c.img_url
            ]
        ).select_from(items_table).where(
            and_(
                items_table.c.category == category,
                items_table.c.subcategory == subcategory
            )
        ).limit(max_per_page)
        .offset(offset1)
    )
    result = await database.fetch_all(query)
    items_records_table = []
    for rec in result:
        items_records_table.append(dict(zip(rec, rec.values())))
    items = items_records_table
    return items


async def get_items_by_category(category: str, page: int):
    max_per_page = 20
    offset1 = (page - 1) * max_per_page
    query = (
        select(
            [
                items_table.c.id,
                items_table.c.item_name,
                items_table.c.price,
                items_table.c.img_url
            ]
        ).select_from(items_table).where(
            items_table.c.category == category
        ).limit(max_per_page)
        .offset(offset1)
    )
    result = await database.fetch_all(query)
    items_records_table = []
    for rec in result:
        items_records_table.append(dict(zip(rec, rec.values())))
    items = items_records_table
    return items


async def post_item(item: item_schema.PostItemModel):
    query = (
        items_table.insert().values(
            item_name=item.item_name,
            price=item.price,
            mass=item.mass,
            description=item.description,
            category=item.category,
            subcategory=item.subcategory,
            harvest_date=item.harvest_date,
            compound=item.compound,
            package=item.package,
            manufacturer=item.manufacturer,
            tips=item.tips,
            size=item.size,
            img_url=item.img_url[0]
        ).returning(
            items_table.c.id,
            items_table.c.item_name,
            items_table.c.price,
            items_table.c.mass,
            items_table.c.description,
            items_table.c.category,
            items_table.c.subcategory,
            items_table.c.harvest_date,
            items_table.c.compound,
            items_table.c.package,
            items_table.c.manufacturer,
        )
    )
    posted_item = await database.fetch_one(query)

    posted_item = dict(zip(posted_item, posted_item.values()))
    imgs_item = [(x, item.item_id) for x in item.img_url]
    await database.execute(images_table.insert().values(
        imgs_item
    ))
    return posted_item


async def post_items(items: List[item_schema.PostItemModel]):
    items_values_list = []
    imgs_values_list = []

    for item in items:
        for image in item.img_url:
            imgs_values_list.append([image, item.id])
    print(imgs_values_list)
    for item in items:
        items_values_list.append([
            vars(item)['id'],
            vars(item)['item_name'],
            vars(item)['price'],
            vars(item)['mass'],
            vars(item)['description'],
            vars(item)['category'],
            vars(item)['subcategory'],
            vars(item)['harvest_date'],
            vars(item)['compound'],
            vars(item)['package'],
            vars(item)['manufacturer'],
            vars(item)['tips'],
            vars(item)['size'],
            vars(item)['img_url'][0],
        ])
    print(items_values_list)
    query = items_table.insert().values(
        items_values_list
    ).returning(
        items_table.c.id,
        items_table.c.item_name,
        items_table.c.price,
        items_table.c.mass,
        items_table.c.description,
        items_table.c.category,
        items_table.c.subcategory,
        items_table.c.harvest_date,
        items_table.c.compound,
        items_table.c.package,
        items_table.c.tips,
        items_table.c.size,
        items_table.c.manufacturer
    )
    items = await database.fetch_all(query)
    await database.execute(images_table.insert().values(
        imgs_values_list
    ))
    items_list = []
    for item in items:
        items_list.append(dict(zip(item, item.values())))
    return {'Items': items_list}

async def get_items_by_ids(ids: List[str]):
    print(ids)
    query = (
        select(
            items_table.c.id,
            items_table.c.item_name,
            items_table.c.price,
            items_table.c.img_url)
        .select_from(items_table).where(items_table.c.id.in_(ids))
    )
    items_records_list = []
    items = await database.fetch_all(query)
    for item in items:
        items_records_list.append(dict(zip(item, item.values())))
    print(items_records_list)
    return items_records_list

