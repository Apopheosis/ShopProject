import sqlalchemy

metadata = sqlalchemy.MetaData()

items_table = sqlalchemy.Table(
    'items',
    metadata,
    sqlalchemy.Column('id', sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column('item_name', sqlalchemy.String()),
    sqlalchemy.Column('price', sqlalchemy.Integer),
    sqlalchemy.Column('mass', sqlalchemy.Integer),
    sqlalchemy.Column('description', sqlalchemy.Text()),
    sqlalchemy.Column('category', sqlalchemy.String),
    sqlalchemy.Column('subcategory', sqlalchemy.String),
    sqlalchemy.Column('harvest_date', sqlalchemy.String(), nullable=True),
    sqlalchemy.Column('compound', sqlalchemy.String(), nullable=True),
    sqlalchemy.Column('package', sqlalchemy.String(), nullable=True),
    sqlalchemy.Column('manufacturer', sqlalchemy.String()),
    sqlalchemy.Column('tips', sqlalchemy.String(), nullable=True),
    sqlalchemy.Column('size', sqlalchemy.String(), nullable=True),
    sqlalchemy.Column('img_url', sqlalchemy.String())
)

images_table = sqlalchemy.Table(
    'images',
    metadata,
    sqlalchemy.Column('img_url', sqlalchemy.String()),
    sqlalchemy.Column('item_id', sqlalchemy.ForeignKey('items.id')),
    sqlalchemy.Column('id', sqlalchemy.Integer, primary_key=True)
)