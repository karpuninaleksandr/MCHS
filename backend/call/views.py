from django.shortcuts import render

# import view sets from the REST framework

def index(request):
    return render(request, settings.INDEX_HTML_PATH)

