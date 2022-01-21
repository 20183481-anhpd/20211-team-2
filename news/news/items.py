# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class NewsItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    title = scrapy.Field()
    link = scrapy.Field()
    thumbnail = scrapy.Field()
    sapo = scrapy.Field()
    category = scrapy.Field()
    source = scrapy.Field()
    release_time = scrapy.Field()
