from django.shortcuts import render
from .models import Product, Category

def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = Category.objects.get(slug=category_slug)
        products = products.filter(category=category)
    return render(request, 'store/product/list.html', {'category': category, 'categories': categories, 'products': products})

def product_detail(request, id, slug):
    product = Product.objects.get(id=id, slug=slug)
    return render(request, 'store/product/detail.html', {'product': product})