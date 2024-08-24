from django.http import JsonResponse

def process_video(request):
    if request.method == 'POST':
        video_file = request.FILES['video']
        # 'video_file' now contains the uploaded video file
        # Process the video file here
        return JsonResponse({'text': 'Video processed successfully'})
    
