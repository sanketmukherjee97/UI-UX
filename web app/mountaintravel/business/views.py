from django.shortcuts import render

nav = ['home', 'about', 'contact', 'memories']

def index(request):
    page = "mountain"
    context = {
        'page':page,
        'nav': nav
    }
    return render(request, 'travel/mountain.html', context)

def tourMemories(request):
    page = "memories"
    context = {
        'page':page,
        'nav': nav
    }
    return render(request, 'travel/memories.html', context)
